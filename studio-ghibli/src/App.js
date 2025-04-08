import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import "./App.css";

// função principal do app
const App = () => {
  // estado para armazenar os filmes recebidos da API
  const [films, setFilms] = useState([]);

  // useEffect roda uma vez quando o componente carrega
  useEffect(() => {
    // faz a requisição get para a API
    axios.get("https://ghibliapi.vercel.app/films")
      .then((resposta) => {
        // se der certo, atualiza a lista de filmes 
        setFilms(resposta.data);
      })
      .catch((error) => {
        // se der erro, mostra no console
        console.error("erro ao buscar os filmes:", error);
      });
  }, []); // colchetes vazios, executa apenas uma vez

  return (
    // container principal
    <div className="app-container">
      <Header />

      {/* frase do criador */}
      <p className="ghibli-frase">
        “Sempre acredite em si mesmo. Faça isso e tudo será possível.” — Hayao Miyazaki
      </p>

      {/* container que vai mostrar os cards dos filmes */}
      <div className="cards-container">
        {/* renderiza um Card para cada um */}
        {films.map((film) => (
          <Card key={film.id} film={film} />
        ))}
      </div>
    </div>
  );
};
export default App;
