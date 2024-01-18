import { BsWhatsapp, BsGithub, BsLinkedin } from "react-icons/bs";

import styles from "./Social.module.css";

const Social = () => {
  return (
    <div className={styles.social}>
      <div className={styles.icon}>
        <a href="https://wa.me/5522992724146" target="_blank">
          {" "}
          <BsWhatsapp />{" "}
        </a>
      </div>
      <div className={styles.icon}>
        <a href="https://github.com/leonardorimes" target="_blank">
          <BsGithub />
        </a>
      </div>
      <div className={styles.icon}>
        <a href="https://www.linkedin.com/in/leonardorimes/" target="_blank">
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Social;
