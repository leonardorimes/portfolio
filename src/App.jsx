import About from "./components/About";
import BaseBoard from "./components/BaseBoard";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";

import "./App.css";
import MySkylls from "./components/MySkylls";

const projects = [
  {
    name: "React food",
    url: "https://images2.imgbox.com/50/87/H67esZ8Z_o.png",
    description:
      "Este projeto é uma landing page responsiva para um restaurante, desenvolvida utilizando React. A página é focada em oferecer uma experiência interativa e atraente para os visitantes",
    site_url: "https://react-food-landing-page.vercel.app",
  },
  {
    name: "Rocket Notes",
    url: "https://images2.imgbox.com/b9/1a/UxVBeZOk_o.png",
    description:
      "O Rocketnotes é um projeto fullstack concluído como parte do curso Explorer da Rocketseat. Durante os Stages 8 a 10, foram abordados diversos conceitos e práticas que me proporcionaram um aprendizado significativo.",
    site_url: "https://rocketnotes22.netlify.app/",
  },
  {
    name: "Poke Search",
    url: "https://images2.imgbox.com/dc/72/hlMQa2eP_o.png",
    description:
      "O Pokesearch é uma aplicação React que permite a busca e visualização de informações sobre Pokémons, utilizando a PokeAPI para obter dados completos sobre cada Pokémon, incluindo imagens, IDs, tipos, habilidades e estatísticas.",
    site_url: "https://pokesearch2023.netlify.app/",
  },
  {
    name: "FootSoccer Academy",
    url: "https://images2.imgbox.com/73/ff/zVUU7F0J_o.png",
    description:
      "Esta é a landing page de uma escolinha de futebol, desenvolvida em Single-Page Application (SPA) utilizando JavaScript puro. A página conta com animações em CSS para criar uma experiência dinâmica e atraente.",
    site_url: "https://sage-sprite-595ef5.netlify.app/",
  },
];

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Home />
        <About />
        <MySkylls />
        <Portfolio projects={projects} />
        <Contact />
      </div>
      <BaseBoard />
    </>
  );
}

export default App;
