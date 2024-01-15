import { Link } from "react-scroll";

import styles from "./NavBar.module.css";
import BurguerMenu from "./BurguerMenu";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.links}>
        <Link to="hero" spy={true} smooth={true} offset={50} duration={1200}>
          Home
        </Link>
        <Link to="about" spy={true} smooth={true} offset={50} duration={1200}>
          Sobre
        </Link>
        <Link
          to="portfolio"
          spy={true}
          smooth={true}
          offset={50}
          duration={1200}
        >
          Portfolio
        </Link>
        <Link to="contact" spy={true} smooth={true} offset={50} duration={1200}>
          Contato
        </Link>
      </div>
      <BurguerMenu />
    </nav>
  );
};

export default NavBar;
