import { Film } from "../App";

type Props = {
  chosenFilm: Film | undefined;
  storeFilm: Function;
};
export default function ChosenFilm({
  chosenFilm,
  storeFilm,
  favoriteFilm,
}: any) {
  function formatAbstract(abstract: string): any {
    const arr = abstract.split("\r\n");
    const formattedAbstract = arr.map((line) => {
      return (
        <>
          <span>{line}</span>
          <br />
        </>
      );
    });
    return formattedAbstract;
  }

  return (
    <div className="mb-auto ml-auto mr-auto chosenFilm d-flex flex-column align-items-center">
      <h1 className="font-weight-bold display-3 mb-3 chosenFilm--title">
        {chosenFilm?.title}
      </h1>
      <p className="mr-3 text-center chosenFilm--abstract">
        {formatAbstract(chosenFilm.opening_crawl)}
      </p>
      <button
        onClick={() => {
          storeFilm(chosenFilm);
        }}
        className="btn btn-lg btn-light chosenFilm--setFavorite"
      >
        {favoriteFilm !== chosenFilm
          ? `Save ${chosenFilm.title} as favorite`
          : `${chosenFilm.title} is marked favorite`}
      </button>
    </div>
  );
}
