import { Link } from "react-scroll";
import styles from "./BurguerMenu.module.css";
import { useState } from "react";

const BurguerMenu = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(true);

  const updateMenu = () => {
    setIsMenuClicked(!isMenuClicked);
  };
  return (
    <>
      <div className={styles.burgerMenu} onClick={updateMenu}>
        <div
          className={
            isMenuClicked
              ? styles["burgerBar"] + " " + styles["clicked"]
              : styles["burgerBar"] + " " + styles["unclicked"]
          }
        ></div>
        <div
          className={
            isMenuClicked
              ? styles["burgerBar"] + " " + styles["clicked"]
              : styles["burgerBar"] + " " + styles["unclicked"]
          }
        ></div>
        <div
          className={
            isMenuClicked
              ? styles["burgerBar"] + " " + styles["clicked"]
              : styles["burgerBar"] + " " + styles["unclicked"]
          }
        ></div>
      </div>

      <div
        className={
          !isMenuClicked
            ? styles["menu"] + " " + styles["visible"]
            : styles["menu"] + " " + styles["hidden"]
        }
      >
        <Link
          to="hero"
          spy={true}
          smooth={true}
          offset={50}
          duration={1200}
          onClick={updateMenu}
        >
          Home
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={50}
          duration={1200}
          onClick={updateMenu}
        >
          Sobre
        </Link>
        <Link
          to="portfolio"
          spy={true}
          smooth={true}
          offset={50}
          duration={1200}
          onClick={updateMenu}
        >
          Portfolio
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={50}
          duration={1200}
          onClick={updateMenu}
        >
          Contato{" "}
        </Link>
      </div>
    </>
  );
};

export default BurguerMenu;
