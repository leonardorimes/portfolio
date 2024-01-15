import { BsWhatsapp, BsInstagram, BsLinkedin } from "react-icons/bs";

import styles from "./Social.module.css";

const Social = () => {
  return (
    <div className={styles.social}>
      <div className={styles.icon}>
        <a href="https://wa.me/5522992724146">
          {" "}
          <BsWhatsapp />{" "}
        </a>
      </div>
      <div className={styles.icon}>
        <a href="https://www.instagram.com/_leotech_/">
          <BsInstagram />
        </a>
      </div>
      <div className={styles.icon}>
        <a href="https://www.linkedin.com/in/leonardorimes/">
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Social;
