import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Form = ({ user }) => {
  const [moviesData, setMoviesData] = useState([]);
  const [search, setSearch] = useState("");
  const [sortGoodBad, setSortGoodBad] = useState(["null"]);

  useEffect(() => {
    let API_KEY = getApiKey();
    console.log(API_KEY);
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}&language=fr-FR`
      )
      .then((res) => setMoviesData(res.data.results));
  }, [search]);

  async function getApiKey() {
    const secret_name = "tmdb-api-key";
    const client = new SecretsManagerClient({ region: "eu-west-3" });
    let response;
    try {
      response = await client.send(
        new GetSecretValueCommand({
          SecretId: secret_name,
          VersionStage: "AWSCURRENT", // VersionStage defaults to AWSCURRENT if unspecified
        })
      );
    } catch (error) {
      throw error;
    }
    return response.SecretString;
  }

  return (
    <div className="form-component">
      <div className="form-container">
        <form>
          <input
            type="text"
            placeholder="Entrez le titre d'un film"
            id="search-input"
            onChange={(e) => setSearch(e.target.value)}
          ></input>
          <input type="submit" value="Rechercher"></input>
        </form>

        <div className="btn-sort-container">
          <div
            className="btn-sort"
            id="goodToBad"
            onClick={() => setSortGoodBad("goodToBad")}
          >
            Top<span>➜</span>
          </div>
          <div
            className="btn-sort"
            id="badToGood"
            onClick={() => setSortGoodBad("badToGood")}
          >
            Flop<span>➜</span>
          </div>
        </div>
        <div className="result">
          {moviesData
            .slice(0, 12)
            .sort((a, b) => {
              if (sortGoodBad === "goodToBad") {
                return b.vote_average - a.vote_average;
              } else if (sortGoodBad === "badToGood") {
                return a.vote_average - b.vote_average;
              }
            })
            .map((movie) => (
              <Card key={movie.id} movie={movie} user={user} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Form;
