import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar, faVideo } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Movie.module.css";
import MovieModal from "./MovieModal";

function Movie(props) {
  const [watchCount, setWatchCount] = useState(0);
  const [personalNote, setPersonalNote] = useState(0);
  const [showModal, setShowModal] = useState(false);

  // MODAL

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  // NOTE PUBLIQUE

  const globalStars = [];

  for (let i = 0; i < 10; i++) {
    globalStars.push(
      <FontAwesomeIcon
        key={i}
        icon={faStar}
        style={i < props.voteAverage ? { color: "#f1c40f" } : {}}
      />
    );
  }

  // NOTE PERSO

  const personalStars = [];

  for (let i = 0; i < 10; i++) {
    personalStars.push(
      <FontAwesomeIcon
        key={i}
        icon={faStar}
        onClick={() => setPersonalNote(i + 1)}
        style={
          i < personalNote
            ? { color: "#2196f3", cursor: "pointer" }
            : { cursor: "pointer" }
        }
      />
    );
  }

  // WATCH

  const handleWatch = () => setWatchCount(watchCount + 1);
  const videoStyle =
    watchCount > 0
      ? { color: "#e74c3c", cursor: "pointer" }
      : { cursor: "pointer" };

  // FAVORIS

  const handleLike = () => props.updateLikedMovies(props.title);
  const heartStyle = props.isLiked
    ? { color: "#e74c3c", cursor: "pointer" }
    : { cursor: "pointer" };

  return (
    <>
      {/* CARD */}

      <div className={styles.card} onClick={openModal}>
        <img className={styles.image} src={props.poster} alt={props.title} />

        <div className={styles.textContainer}>
          <div>
            <div className={styles.name}>{props.title}</div>
            <p className={styles.description}>{props.overview}</p>
          </div>

          {/* NOTE PUBLIQUE */}

          <div className={styles.ratingRow}>
            <span>{globalStars}</span>
            <span className={styles.count}>({props.voteCount})</span>
          </div>

          {/* NOTE PERSO */}

          <div className={styles.ratingRow}>
            <span>{personalStars}</span>
            <span className={styles.count}>({personalNote})</span>
          </div>

          {/* ACTIONS */}

          <div className={styles.actionRow}>
            <span
              onClick={(e) => {
                e.stopPropagation();
                handleLike();
              }}
            >
              <FontAwesomeIcon icon={faHeart} style={heartStyle} />
            </span>

            <span
              onClick={(e) => {
                e.stopPropagation();
                handleWatch();
              }}
            >
              <FontAwesomeIcon icon={faVideo} style={videoStyle} />({watchCount}
              )
            </span>
          </div>
        </div>
      </div>

      {/* MODAL */}

      {showModal && (
        <MovieModal
          movie={{
            title: props.title,
            overview: props.overview,
            poster: props.poster,
            voteCount: props.voteCount,
            voteAverage: props.voteAverage,
            isLiked: props.isLiked,
            watchCount: watchCount, 
          }}
          onClose={closeModal}
          onLike={(e) => { e.stopPropagation(); handleLike(); }}
          onWatch={(e) => { e.stopPropagation(); handleWatch(); }}
        />
      )}
    </>
  );
}

export default Movie;
