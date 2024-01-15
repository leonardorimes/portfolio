import styles from "./SecondTitle.module.css";

const SecondTitle = ({ text }) => {
  return <h2 className={styles.title}>{text}</h2>;
};

export default SecondTitle;
