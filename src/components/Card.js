import React from "react";
import {
  SecretsManagerClient,
  GetSecretValueCommand,
} from "@aws-sdk/client-secrets-manager";

const Card = ({ movie, user }) => {
  const dateFormatter = (date) => {
    let [yy, mm, dd] = date.split("-");
    return [dd, mm, yy].join("/");
  };

  async function addStorage(userId, likedMovie) {
    const url =
      "https://0vgayvx2sd.execute-api.eu-west-3.amazonaws.com/prod/addlikedmovie";
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({ userId, likedMovie }),
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error(`Error adding to storage: ${response.statusText}`);
      }
      const responseData = await response.json();
      console.log("Storage update response:", responseData);
    } catch (error) {
      console.error("Error adding to storage:", error);
    }
  }

  return (
    <div className="card">
      <img
        src={
          movie.poster_path
            ? "https://image.tmdb.org/t/p/w500/" + movie.poster_path
            : "./img/poster.jpg"
        }
        alt="affiche film"
      ></img>
      <h2>{movie.title}</h2>
      {movie.release_date ? (
        <h5>Sorti le : {dateFormatter(movie.release_date)}</h5>
      ) : (
        ""
      )}
      <h4>
        {movie.vote_average}/10 <span>⭐</span>
      </h4>
      {movie.overview ? <h3>Synopsys </h3> : ""}
      <p>{movie.overview}</p>
      <div className="btn" onClick={() => addStorage(user.username, movie.id)}>
        Ajouter aux coups de coeur
      </div>
    </div>
  );
};

export default Card;
