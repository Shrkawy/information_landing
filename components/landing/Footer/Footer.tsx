import { FC } from "react";
import styles from "./styles.module.css";

const Footer: FC<{ data: any }> = ({ data }) => {
  console.log(data);
  return (
    <div className={styles.footer}>
      <div className={styles.privacyPolicy}>
        <div>
          <span>Privacy Policy</span>
          <span>Terms & Conditions</span>
        </div>
        <span>Copyright © 2022 {data.name} All Rights Reserved</span>
      </div>
    </div>
  );
};

export default Footer;
