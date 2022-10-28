import { FC, useMemo } from "react";
import styles from "./styles.module.css";

const LogoSection: FC<{ data: any }> = ({ data }) => {
  const siteData = useMemo(() => data, [data]);

  return (
    <div className={styles.logoSection}>
      <img
        style={{
          maxWidth: "300px",
        }}
        src={siteData.logo}
        alt="#"
        className={styles.image}
      />
    </div>
  );
};

export default LogoSection;
