import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Card from "../components/Card";
import Header from "../components/Header";

const UserList = ({ user }) => {
  const [listData, setListData] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      const moviesId = await getLikedMovies(user.username);
      if (moviesId) {
        const uniqueMovies = new Set(); // Create a Set to store unique movies
        for (let i = 0; i < moviesId.length; i++) {
          const movieId = moviesId[i];
          const response = await axios.get(
            `https://api.themoviedb.org/3/movie/${movieId}?api_key=c58ffbbfcec3d00f132dc417fb260fb0&language=fr-FR`
          );
          uniqueMovies.add(response.data); // Add movie object to the Set
        }
        setListData([...uniqueMovies]); // Update listData with unique movies
      } else {
        console.log("No liked movies found");
      }
    };
    fetchMovies();
  }, [user.username]);

  async function getLikedMovies(userId) {
    const url = `https://0vgayvx2sd.execute-api.eu-west-3.amazonaws.com/prod/getlikedmovies?userId=${userId}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching liked movies:", error);
      return [];
    }
  }

  return (
    <div className="user-list-page">
      <Header />
      <h2>Coup de coeur</h2>
      <div className="result">
        {console.log(listData)}
        {listData.length > 0 ? (
          listData.map((movie) => <Card movie={movie} key={movie.id} />)
        ) : (
          <h2>Aucun coup de coeur pour le moment</h2>
        )}
      </div>
    </div>
  );
};

export default UserList;
