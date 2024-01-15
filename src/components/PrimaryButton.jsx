import styles from "./PrimaryButton.module.css";

const PrimaryButton = ({ url, text, ...props }) => {
  return (
    <div className={styles.button}>
      <a href={url} {...props}>
        {text}
      </a>
    </div>
  );
};

export default PrimaryButton;
