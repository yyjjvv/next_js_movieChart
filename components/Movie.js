import Link from "next/link";
import Image from "next/image";

import styles from "./Movie.module.css";

import StarRating from "./StarRating";

const Movie = ({ movie }) => {
    return (
        <li>
            <Link href={`/movies/${movie.id}`}>
                <div className={styles.poster}>
                    <Image src={movie.posterUrl} alt={movie.title} sizes="100%" fill />
                </div>
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
