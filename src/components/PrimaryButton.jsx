import styles from "./PrimaryButton.module.css";

const PrimaryButton = ({ url, text, ...props }) => {
  return (
    <a href={url} {...props} className={styles.button}>
      {text}
    </a>
  );
};

export default PrimaryButton;
