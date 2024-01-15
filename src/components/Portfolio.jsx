import SecondTitle from "./secondTitle";

import styles from "./Portfolio.module.css";
import PrimaryButton from "./PrimaryButton";

const Portfolio = ({ projects }) => {
  return (
    <div className={styles.portfolio} id="portfolio">
      <SecondTitle text="Portfolio" />
      <div className={styles.album}>
        {projects.map((project) => (
          <div className={styles.box} key={project.name}>
            <div className={styles.imgBox}>
              <img src={project.url} alt={project.name} />
            </div>
            <div>
              <div className={styles.content}>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div>
                  <PrimaryButton
                    text="confira"
                    url={project.site_url}
                    target="_blank"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
