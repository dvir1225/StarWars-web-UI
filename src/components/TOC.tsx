import { ReactNode } from "react";
import { Film } from "../App";

export default function TOC({ allFilms, setChosenFilm }: any) {
  const filmTitles: ReactNode = allFilms.map((film: Film) => {
    return (
      <div
        className="toc--film mb-2 d-flex justify-content-center"
        key={film.title}
      >
        <button
          onClick={() => setChosenFilm(film)}
          className="btn btn-light toc--film-title"
        >
          {film.title}
        </button>
      </div>
    );
  });

  return <div className="d-flex flex-column toc--films">{filmTitles}</div>;
}
