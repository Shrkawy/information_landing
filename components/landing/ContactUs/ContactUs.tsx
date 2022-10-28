import { FC, FormEvent, useMemo } from "react";
import styles from "./styles.module.css";

const ContactUs: FC<{ data: any }> = ({ data }) => {
  const siteData = useMemo(() => data, [data]);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const email = formData.get("email");
    try {
      const response = await fetch(data.cta.href, {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        form.reset();
        alert("Thank you for subscribing!");
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
      return;
    }
  };

  return (
    <div id="contactus" className={styles.contactUs}>
      <h2 className={styles.title}>{siteData.title}</h2>
      <p className={styles.text}>{siteData.subtitle}</p>
      <form onSubmit={onSubmit} className={styles.submitInput}>
        <input
          placeholder="Enter Your Email*"
          type="email"
          name="email"
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          {siteData.cta.text}
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
