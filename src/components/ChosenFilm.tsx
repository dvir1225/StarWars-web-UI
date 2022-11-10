import { Film } from "../App";

export default function ChosenFilm({ chosenFilm, setFavoriteFilm }: any) {
  return (
    <div className="chosenFilm">
      <h1 className="chosenFilm--title">{chosenFilm.title}</h1>
      <p className="chosenFilm--abstract">{chosenFilm.opening_crawl}</p>
      <button
        onClick={() => {
          setFavoriteFilm(chosenFilm);
        }}
        className="chosenFilm--setFavorite"
      >
        Save {chosenFilm.title} as favorite
      </button>
    </div>
  );
}
