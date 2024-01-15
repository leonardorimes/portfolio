import styles from "./PrimaryTitle.module.css";
const PrimaryTitle = ({ text }) => {
  return <h1 className={styles.title}>{text}</h1>;
};

export default PrimaryTitle;
