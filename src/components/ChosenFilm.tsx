import { useEffect, useState } from "react";
import { Film } from "../App";

type Props = {
  chosenFilm: Film | undefined;
  handleFavoriteStorage: Function;
};

export default function ChosenFilm({
  chosenFilm,
  handleFavoriteStorage,
}: Props) {
  const [isFavorite, setIsFavorite] = useState(false);
  //setting and saving favorite state to local storage and state
  function handleSetFavorite(chosenFilm: Film) {
    if (localStorage.getItem(`${chosenFilm.title}`)) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }

  useEffect(() => {
    if (chosenFilm) {
      handleSetFavorite(chosenFilm);
    }
  }, [chosenFilm]);
  //takes film abstract as a string an formats it as a JSX Elemen
  function formatAbstract(abstract: string): JSX.Element[] {
    const arr = abstract.split("\r\n");
    const formattedAbstract = arr.map((line, index) => {
      return (
        <div key={index}>
          <span>{line}</span>
          <br />
        </div>
      );
    });
    return formattedAbstract;
  }

  return (
    <div className="mb-auto chosenFilm d-flex flex-column align-items-center mr-auto ml-auto">
      <div className="chosenFilm--top d-flex justify-content-center align-items-center">
        <h1 className="font-weight-bold display-3 chosenFilm--title">
          {chosenFilm?.title}
        </h1>
        <div
          onClick={() => {
            if (chosenFilm) {
              handleFavoriteStorage(chosenFilm);
              handleSetFavorite(chosenFilm);
            }
          }}
          className="chosenFilm--favorite d-flex align-items-center justify-content-center"
        >
          {isFavorite ? (
            <i className="ml-3 fa-solid fa-heart chosenFilm--setFavorite"></i>
          ) : (
            <i className="ml-3 fa-regular fa-heart chosenFilm--setFavorite"></i>
          )}
        </div>
      </div>
      <div className="text-center chosenFilm--abstract">
        {chosenFilm !== undefined && formatAbstract(chosenFilm.opening_crawl)}
      </div>
    </div>
  );
}
