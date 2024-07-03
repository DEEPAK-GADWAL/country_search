import React, { useEffect, useState } from "react";
import styles from "./Country.module.css";

const Country = () => {
  const [countries, setCountries] = useState([]);
  const API_ENDPOINT = "https://xcountries-backend.azurewebsites.net/all";

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const res = await fetch(API_ENDPOINT);
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchCountry();
  }, []);

  return (
    <div className={styles.mainCard}>
      {countries.map((country, idx) => (
        <div key={idx} className={styles.cardWrapper}>
          <img src={country.flag} alt={country.name} className={styles.cardImg} />
          <h4>{country.name}</h4>
        </div>
      ))}
    </div>
  );
};

export default Country;
