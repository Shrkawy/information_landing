import styles from "./styles.module.css";
import { FC, useMemo } from "react";

const HeroSection: FC<{ data: any }> = ({ data }) => {
  const siteData = useMemo(() => data, [data]);

  return (
    <div className={styles.heroSection}>
      <img src={siteData.background_image} alt="#" className={styles.image} />
      <div className={styles.textContainer}>
        <div className={styles.titleAndTagline}>
          <h2 className={styles.title}>{siteData.title}</h2>
          <p className={styles.tagline}>{siteData.subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
