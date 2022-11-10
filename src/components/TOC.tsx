import { ReactNode } from "react";
import { Film } from "../App";

export default function TOC({ allFilms, setChosenFilm }: any) {
  const filmTitles: ReactNode = allFilms.map((film: Film) => {
    return (
      <div className="toc--film" key={film.title}>
        <button onClick={() => setChosenFilm(film)} className="toc--film-title">
          {film.title}
        </button>
      </div>
    );
  });

  return <div className="toc--films">{filmTitles}</div>;
}
