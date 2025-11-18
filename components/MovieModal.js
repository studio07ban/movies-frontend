import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faHeart, faVideo, faStar } from "@fortawesome/free-solid-svg-icons";
import modalStyles from "../styles/MovieModal.module.css";

function MovieModal({ movie, onClose, onLike, onWatch }) {

  return (
    
    <div className={modalStyles.overlay}>
      <div className={modalStyles.modal}>

        {/* CLOSE BUTTON */}

        <button className={modalStyles.closeBtn} onClick={onClose}>

          <FontAwesomeIcon 
          icon={faXmark} 
          />

        </button>

        {/* IMAGE + TITLE */}

        <div className={modalStyles.header}>
          <img src={movie.poster} className={modalStyles.poster} alt={movie.title} />
          <h2 className={modalStyles.title}>{movie.title}</h2>
        </div>

        {/* FULL DESCRIPTION */}

        <p className={modalStyles.description}>{movie.overview}</p>

        {/* PUBLIC RATING */}

        <div className={modalStyles.ratingSection}>
          <h3>Note publique</h3>

          <div className={modalStyles.stars}>
            {[...Array(10)].map((_, i) => (

              <FontAwesomeIcon
                key={i}
                icon={faStar}
                style={i < movie.voteAverage ? { color: "#f1c40f" } : {}}
              />

            ))}
          </div>

          <span className={modalStyles.count}>({movie.voteCount}) votes</span>
        </div>

        {/* ACTION BUTTONS — fully functional */}

        <div className={modalStyles.actionRow}>
          <span onClick={onLike}>

            <FontAwesomeIcon
              icon={faHeart}
              style={movie.isLiked ? { color: "#e74c3c" } : {}}
            />

          </span>

          <span onClick={onWatch}>

            <FontAwesomeIcon
              icon={faVideo}
              style={movie.watchCount > 0 ? { color: "#e74c3c" } : {}}
            />

            <span style={{ marginLeft: 6 }}>({movie.watchCount})</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;