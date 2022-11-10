import React from "react";
import { useEffect, useState } from "react";
import TOC from "./components/TOC";
import ChosenFilm from "./components/ChosenFilm";

export interface Film {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  url: string;
}

function App() {
  const [allFilms, setAllFilms] = useState<Film[]>();
  const [chosenFilm, setChosenFilm] = useState<Film>();
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [favoriteFilm, setFavoriteFilm] = useState<Film>();

  useEffect(() => {
    const url = "https://swapi.dev/api/films/";
    fetch(url)
      .then((data) => data.json())
      .then((res) => {
        setAllFilms(res.results);
        setChosenFilm(res.results[0]);
        setIsDataLoaded(true);
      })
      .catch((error) => console.log(error));
  }, []);

  if (!isDataLoaded) {
    return <h1>Please wait while the data loads</h1>;
  }

  return (
    <div>
      <TOC allFilms={allFilms} setChosenFilm={setChosenFilm} />
      <ChosenFilm chosenFilm={chosenFilm} setFavoriteFilm={setFavoriteFilm} />
    </div>
  );
}

export default App;
