import { Film } from "../App";
export default function ChosenFilm({ chosenFilm, handleFavorite }: any) {
  function formatAbstract(abstract: string): any {
    return { __html: `${abstract.replace(/\r\n/g, "<br />")}` };
  }

  return (
    <div className="mb-auto ml-auto mr-auto chosenFilm d-flex flex-column align-items-center">
      <h1 className="display-3 mb-3 chosenFilm--title">{chosenFilm.title}</h1>
      <p
        className="mr-3 text-center chosenFilm--abstract"
        dangerouslySetInnerHTML={formatAbstract(chosenFilm.opening_crawl)}
      ></p>
      <button
        onClick={() => {
          handleFavorite(chosenFilm);
        }}
        className="btn btn-primary chosenFilm--setFavorite"
      >
        Save {chosenFilm.title} as favorite
      </button>
    </div>
  );
}
