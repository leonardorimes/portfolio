import SecondTitle from "./SecondTitle";

import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <div className={styles.skills}>
      <SecondTitle text={"Habilidades"} />
      <ul>
        <span>
          <li>
            <span>HTML </span>
          </li>
          <li>
            <span>CSS</span>
          </li>
          <li>
            <span>JavaScript</span>
          </li>
        </span>

        <span>
          <li>
            <span>React</span>
          </li>
          <li>
            <span>Typescript</span>
          </li>
        </span>
      </ul>
    </div>
  );
};
export default Skills;
