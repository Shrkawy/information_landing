import styles from "./styles.module.css";
import { useMemo, FC } from "react";

const Pricing: FC<{ data: any }> = ({ data }) => {
  const pricingData = useMemo(
    () => [
      {
        package: data.plans[0].title,
        price: data.plans[0].price,
        checkmark: "/checkMark.png",
        services: data.plans[0].description,
        to: data.plans[0].cta.href,
        button: data.plans[0].cta.text,
      },
      {
        normal: true,
        package: data.plans[1].title,
        price: data.plans[1].price,
        checkmark: "/checkMark.png",
        services: data.plans[1].description,
        to: data.plans[1].cta.href,
        button: data.plans[1].cta.text,
      },
      {
        package: data.plans[2].title,
        price: data.plans[2].price,
        checkmark: "/checkMark.png",
        services: data.plans[2].description,
        to: data.plans[2].cta.href,
        button: data.plans[2].cta.text,
      },
    ],
    [data]
  );
  return (
    <div id="pricing">
      <div className={styles.wrapper}>
        <h2 className={styles.title}>{data.title}</h2>
        <div className={styles.pricing}>
          {pricingData?.map((el: any, i: number) => (
            <div
              key={i}
              className={`${styles.pricingCard} ${
                el.normal && styles.normalPricing
              }`}
            >
              <div>
                {" "}
                <div className={styles.iconAndPackage}>
                  <div className={styles.iconContainer}>
                    <img src="/people.png" alt="#" className={styles.icon} />
                  </div>
                  <h5 className={styles.package}>{el.package}</h5>
                </div>
                <div className={styles.priceAndDuration}>
                  <span className={styles.price}>$ {el.price}</span>
                  <span className={styles.duration}>/ per month</span>
                </div>
                <div>
                  {el?.services?.map((service: any, i: number) => (
                    <div className={styles.service} key={i}>
                      <img
                        src={el.checkmark}
                        alt="#"
                        className={styles.checkMark}
                      />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </div>
              <a href={el.to} className={styles.button}>
                {el.button}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
