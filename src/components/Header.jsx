import NavBar from "./NavBar";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <span>Rimes</span>
      </div>
      <NavBar />
    </header>
  );
};

export default Header;
