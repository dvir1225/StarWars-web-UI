import { ReactNode } from "react";
import { Film } from "../App";

export default function TOC({ allFilms, setChosenFilm }: any) {
  const filmTitles: ReactNode = allFilms.map((film: Film) => {
    return (
      <div className="film" key={film.title}>
        <button onClick={() => setChosenFilm(film)} className="film-title">
          {film.title}
        </button>
      </div>
    );
  });

  return <div className="films">{filmTitles}</div>;
}
