import styles from "./Avatar.module.css";
import Pic from "../assets/avatar.png";

const Avatar = () => {
  return (
    <div className={styles.avatar}>
      <span>
        <h1>Leonardo Rimes</h1>
        <p> Front - end Developer</p>
      </span>

      <img src={Pic} className={styles.image} />
    </div>
  );
};

export default Avatar;
