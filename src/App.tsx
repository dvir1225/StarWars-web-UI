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
  const [favoriteFilm, setFavoriteFilm] = useState<any>();

  useEffect(() => {
    const url = "https://swapi.dev/api/films/";
    fetch(url)
      .then((data) => data.json())
      .then((res) => {
        setAllFilms(res.results);
        setChosenFilm(res.results[0]);
        // loadDefaultFilm(res);
        setIsDataLoaded(true);
      })
      .catch((error) => console.log(error));
  }, []);

  // function loadDefaultFilm(res: any): void {
  //   const storedFilm = localStorage.getItem("film-title");
  //   if (storedFilm === null) {
  //     setChosenFilm(res.results[0]);
  //     console.log("not stored");
  //   } else if (storedFilm !== null) {
  //     const favFilm: any = allFilms?.filter(
  //       (film) => film.title !== storedFilm
  //     );
  //     setChosenFilm(favFilm);
  //     console.log("stored");
  //   }
  // else if (allFilms !== undefined) {
  //   allFilms.forEach((film) => {
  //     if (film.title === storedFilm) {
  //       setChosenFilm(film);
  //     }
  //   });
  // }
  // }

  // function storeFilm(film: Film) {
  //   window.localStorage.setItem("film-title", film.title);
  //   console.log("stored film");
  //   console.log(localStorage.getItem("film-title"));
  // }

  // function handleFavorite(film: Film): void {
  //   setFavoriteFilm(film);
  //   storeFilm(film);
  // }

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
      <ChosenFilm
        chosenFilm={chosenFilm}
        //  handleFavorite={handleFavorite}
      />
    </main>
  );
}

export default App;
