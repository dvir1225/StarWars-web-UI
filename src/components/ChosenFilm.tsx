import { Film } from "../App";

type Props = {
  chosenFilm: Film | undefined;
  storeFilm: Function;
  favoriteFilm: Film | undefined;
};

export default function ChosenFilm({
  chosenFilm,
  storeFilm,
  favoriteFilm,
}: Props) {
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
  const isFavorite = favoriteFilm !== chosenFilm ? false : true;

  return (
    <div className="mb-auto chosenFilm d-flex flex-column align-items-center mr-auto ml-auto">
      <div className="chosenFilm--top d-flex justify-content-center align-items-center">
        <h1 className="font-weight-bold display-3 mb-3 chosenFilm--title">
          {chosenFilm?.title}
        </h1>
      </div>
      <div className="text-center chosenFilm--abstract">
        <div
          onClick={() => {
            storeFilm(chosenFilm);
          }}
          className="chosenFilm--favorite mb-4 mt-2 d-flex align-items-center justify-content-center"
        >
          {isFavorite ? (
            <span>Marked favorite</span>
          ) : (
            <span> Mark as favorite</span>
          )}
          {isFavorite ? (
            <i className="ml-3 fa-solid fa-heart chosenFilm--setFavorite"></i>
          ) : (
            <i
              className="ml-3 fa-regular fa-heart chosenFilm--setFavorite"
              // onClick={() => {
              //   storeFilm(chosenFilm);
              // }}
            ></i>
          )}
        </div>
        {chosenFilm !== undefined && formatAbstract(chosenFilm.opening_crawl)}
      </div>
    </div>
  );
}
