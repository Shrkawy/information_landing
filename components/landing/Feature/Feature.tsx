import { FC, useMemo } from "react";
import styles from "./styles.module.css";

const Feature: FC<{ data: any }> = ({ data }) => {
  const featuresData = useMemo(() => [...data.items], [data]);
  return (
    <div id="feature">
      <h1 className={styles.title}>Our features</h1>
      <div className={styles.featuresContainer}>
        {featuresData.map((el, i) => (
          <div className={styles.feature} key={i}>
            <div className={styles.iconContainer}>
              <img src={el.image} alt="#" className={styles.icon} />
            </div>

            <h4 className={styles.tagline}>{el.title}</h4>
            <p className={styles.text}>{el.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
