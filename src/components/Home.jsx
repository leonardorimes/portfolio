import Social from "./Social";

import styles from "./Home.module.css";
import Avatar from "./Avatar";

const Home = () => {
  return (
    <div className={styles.home} id="hero">
      <Social />
      <Avatar />
    </div>
  );
};

export default Home;
