import React from "react";
import { useEffect, useState } from "react";
import TOC from "./components/TOC";
import ChosenFilm from "./components/ChosenFilm";
import Modal from "./components/Modal";

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
  const [modalIsOpen, setModalIsOpen] = useState(false);

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

  function handleFavoriteStorage(film: Film) {
    if (!localStorage.getItem(`${film.title}`)) {
      localStorage.setItem(`${film.title}`, "isFavorite");
      setModalIsOpen(true);
    } else {
      localStorage.removeItem(`${film.title}`);
    }
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
      {modalIsOpen && (
        <Modal chosenFilm={chosenFilm} setModalIsOpen={setModalIsOpen} />
      )}
      <nav className="toc d-flex flex-column align-items-center ml-3">
        <img
          className="toc--logo"
          src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg"
          alt="star wars logo"
        />
        <h4 className="toc--title text-center font-weight-bold mt-3 mb-3">
          Choose a film:
        </h4>
        <TOC allFilms={allFilms} setChosenFilm={setChosenFilm} />
      </nav>
      <ChosenFilm
        chosenFilm={chosenFilm}
        handleFavoriteStorage={handleFavoriteStorage}
      />
    </main>
  );
}

export default App;
