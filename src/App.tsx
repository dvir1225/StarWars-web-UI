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

  useEffect(() => {
    const url = "https://swapi.dev/api/films/";
    fetch(url)
      .then((data) => data.json())
      .then((res) => {
        setAllFilms(res.results);
        loadDefaultFilm(res);
        setIsDataLoaded(true);
      })
      .catch((error) => console.log(error));
  }, []);

  function loadDefaultFilm(res: any): void {
    const storedFilm = localStorage.getItem("film-title");
    if (storedFilm) {
      const defaultFilm = res.results?.filter(
        (film: Film) => film.title === storedFilm
      );
      setChosenFilm(defaultFilm[0]);
    } else {
      setChosenFilm(res.results[0]);
    }
  }

  function storeFilm(film: Film) {
    window.localStorage.setItem("film-title", film.title);
  }

  if (!isDataLoaded) {
    return (
      <div className="loading">
        <h1>Fetching data from a galaxy far, far away...</h1>
      </div>
    );
  }

  return (
    <main className="container-fluid h-100">
      <nav className="toc d-flex flex-column ml-5">
        <img
          className="toc--logo"
          src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg"
          alt="star wars logo"
        />
        <h4 className="text-center font-weight-bold mt-3 mb-3">
          Choose a film:
        </h4>
        <TOC allFilms={allFilms} setChosenFilm={setChosenFilm} />
      </nav>
      <ChosenFilm chosenFilm={chosenFilm} storeFilm={storeFilm} />
    </main>
  );
}

export default App;
