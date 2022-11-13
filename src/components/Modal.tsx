import { Film } from "../App";

type Props = {
  chosenFilm: Film | undefined;
  setModalIsOpen: Function;
};
export default function Modal({ chosenFilm, setModalIsOpen }: Props) {
  return (
    <div className="modal--main">
      <div className="modal--content">
        <p className="modal--text">
          {chosenFilm !== undefined &&
            `${chosenFilm.title} has been successfuly marked favorite`}
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
