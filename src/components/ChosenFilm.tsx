import { Film } from "../App";

export default function ChosenFilm({ chosenFilm, setFavoriteFilm }: any) {
  return (
    <div className="chosenFilm">
      <h1>{chosenFilm.title}</h1>
      <p>{chosenFilm.opening_crawl}</p>
      <button
        onClick={() => {
          setFavoriteFilm(chosenFilm);
        }}
        className="setFavoriteFilm"
      >
        Save {chosenFilm.title} as favorite
      </button>
    </div>
  );
}
