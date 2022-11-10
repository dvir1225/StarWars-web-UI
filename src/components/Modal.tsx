export default function Modal({ favoriteFilm, setModalIsOpen }: any) {
  return (
    <div className="modal--main">
      <div className="modal--content">
        <p className="modal--text">
          {favoriteFilm.title} has been successfuly marked favorite
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
