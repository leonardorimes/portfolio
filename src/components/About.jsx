import styles from "./About.module.css";

import Pic from "../assets/pic_2.jpg";
import SecondTitle from "./secondTitle";
import PrimaryTitle from "./PrimaryTitle";
import Skills from "./Skills";

const About = () => {
  return (
    <div className={styles.about} id="about">
      <div>
        <img src={Pic} alt="" />
      </div>
      <div>
        <div className={styles.text}>
          <SecondTitle text="Sobre" />
          <PrimaryTitle text="Leonardo Rimes" />
          <p>
            Sou Desenvolvedor Front-end apaixonado pela tecnologia e pela
            educação. Especializado na criação de ferramentas online dinâmicas e
            impactantes, utilizando JavaScript como minha linguagem principal.
            Sou um entusiasta do React para o front end e Node.js para o
            backend, buscando sempre a excelência na entrega de soluções
            inovadoras.
          </p>
        </div>

        <Skills />
      </div>
    </div>
  );
};

export default About;
