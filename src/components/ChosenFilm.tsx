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

  return (
    <div className="mb-auto chosenFilm d-flex flex-column align-items-center mr-auto ml-auto">
      <h1 className="font-weight-bold display-3 mb-3 chosenFilm--title">
        {chosenFilm?.title}
      </h1>
      <div className="text-center chosenFilm--abstract">
        {chosenFilm !== undefined && formatAbstract(chosenFilm.opening_crawl)}
      </div>
      <button
        onClick={() => {
          storeFilm(chosenFilm);
        }}
        className="btn btn-lg btn-light mt-3 chosenFilm--setFavorite"
      >
        {chosenFilm !== undefined &&
          (favoriteFilm !== chosenFilm
            ? `Save ${chosenFilm.title} as favorite`
            : `${chosenFilm.title} is marked favorite`)}
      </button>
    </div>
  );
}
