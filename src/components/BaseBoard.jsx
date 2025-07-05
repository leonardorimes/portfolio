import styles from "./BaseBoard.module.css";

import PrimaryTitle from "./PrimaryTitle";

const BaseBoard = () => {
  return (
    <footer className={styles.footer}>
      <PrimaryTitle text="Rimes" />
      <p>Todos os direitos reservados</p>
    </footer>
  );
};

export default BaseBoard;
