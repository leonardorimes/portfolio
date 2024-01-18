import PrimaryTitle from "./PrimaryTitle";
import SecondTitle from "./SecondTitle";

import PrimaryButton from "./PrimaryButton";
import emailjs from "emailjs-com";

import styles from "./Contact.module.css";

const Contact = () => {
  function enviarEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmailMessage",
        "template_4m13d9p",
        e.target,
        "qBifyS-ncgTggC0Co"
      )
      .then(
        (result) => {
          alert("mensagem enviada com sucesso! :) ");
        },
        (error) => {
          alert("error.message");
        }
      );
    e.target.reset();
  }

  return (
    <div className={styles.contact} id="contact">
      <SecondTitle text={"Contato"} />
      <div className={styles.content}>
        <div>
          <p>
            <PrimaryTitle text="Lets Work" />
            Como Front-End Developer, estou aqui para colaborar em projetos
            incríveis, transformando ideias em experiências digitais
            envolventes. Meu foco é proporcionar design responsivo e desempenho
            de alta qualidade. Vamos trabalhar juntos para dar vida às suas
            ideias!
          </p>
        </div>

        <div>
          <form onSubmit={enviarEmail} className={styles.form}>
            <div className={styles.formControl}>
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Escreva o seu nome aqui"
              />
            </div>
            <div className={styles.formControl}>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Escreva o seu email aqui"
              />
            </div>
            <div className={styles.formControl}>
              <label htmlFor="message">Mensagem</label>
              <textarea
                rows="4"
                cols="50"
                placeholder="Escreva sua mensagem aqui"
                name="message"
              ></textarea>
            </div>
            <button>enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
