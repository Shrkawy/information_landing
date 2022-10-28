import { useState, FC } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import styles from "./styles.module.css";
import Image from "next/image";

const Header: FC<{ data: any }> = ({ data }) => {
  const [sidebar, setSidebar] = useState(false);
  const navArray = [
    { navItem: "Features ", to: "feature" },
    { navItem: "Pricing ", to: "pricing" },
    { navItem: "Contact us ", to: "contactus" },
  ];
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Image layout="fill" objectFit="contain" src={data.logo} alt="#" />
        </div>

        {sidebar ? (
          <MdClose
            className={styles.icon}
            onClick={() => setSidebar((prev) => !prev)}
          />
        ) : (
          <GiHamburgerMenu
            className={styles.icon}
            onClick={() => setSidebar((prev) => !prev)}
          />
        )}
        <div className={`${styles.navItems} ${sidebar && styles.sidebar}`}>
          {navArray.map((el, i) => (
            <Link
              key={i}
              activeClass={styles.active}
              className={styles.navItem}
              to={el.to}
              spy={true}
              smooth={true}
              offset={-25}
              duration={500}
              onClick={() => setSidebar((prev) => !prev)}
            >
              {el.navItem}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
