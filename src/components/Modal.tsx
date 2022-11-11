import { Film } from "../App";

type Props = {
  favoriteFilm: Film | undefined;
  setModalIsOpen: Function;
};
export default function Modal({ favoriteFilm, setModalIsOpen }: Props) {
  return (
    <div className="modal--main">
      <div className="modal--content">
        <p className="modal--text">
          {favoriteFilm !== undefined &&
            `${favoriteFilm.title} has been successfuly marked favorite`}
        </p>
        <button
          onClick={() => {
            setModalIsOpen(false);
          }}
          className="btn btn-light modal--close"
        >
          Close
        </button>
      </div>
    </div>
  );
}
