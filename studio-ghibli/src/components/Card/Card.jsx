import React from "react";
import "./Card.css";

// componente card que recebe um objeto "film" como propriedade
const Card = ({ film }) => {
  return (
    // div principal com a classe para estilização do card
    <div className="filme-card">
      {/* título do filme */}
      <h2 className="filme-titulo">{film.title}</h2>

      {/* verifica se o filme tem imagem, se sim, exibe a imagem */}
      {film.image && (
        <img
          src={film.image}         //caminho imagem
          alt={film.title}          // texto se a imagem não carregar
          className="filme-imagem"  // estilização pra imagem
        />
      )}

      {/* nformações extras sobre o filme */}
      <div className="filme-meta">
        <span><strong>Diretor:</strong> {film.director}</span>
        <span><strong>Produtor:</strong> {film.producer}</span>
        <span><strong>Lançamento:</strong> {film.release_date}</span>
      </div>

       {/* descrição do filme */}
      <p className="filme-description">{film.description}</p>
    </div>
  );
};
export default Card;
