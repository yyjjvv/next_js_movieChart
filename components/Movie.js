import Link from "next/link";

import styles from "./Movie.module.css";

import StarRating from "./StarRating";

const Movie = ({ movie }) => {
    return (
        <li>
            <Link href={`/movies/${movie.id}`}>
                <img
                    className={styles.poster}
                    src={movie.posterUrl}
                    alt={movie.title}
                />
            </Link>
            <div className={styles.info}>
                <h2 className={styles.title}>{movie.title}</h2>
                <div className={styles.date}>
                    {movie.date} ・ {movie.country}
                </div>
                <div className={styles.starRatingContainer}>
                    <StarRating value={movie.starRating} />
                    <span className={styles.starRating}>
                        {movie.starRating}
                    </span>
                </div>
            </div>
        </li>
    );
};

export default Movie;
