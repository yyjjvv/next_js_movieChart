import styles from './Movie.module.css'
import formatDate from "@/util/formatDate";

import StarRating from "./StarRating";

const labels = {
    sex: {
        male: "남성",
        female: "여성",
    },
};

const MovieReview = ({ movieReview }) => {
    return (
        <li className={styles.movieReview}>
            <div className={styles.date}>
                {formatDate(movieReview.createdAt)}
            </div>
            <div>{labels.sex[movieReview.sex]}</div>
            <div className={styles.age}>{movieReview.age}대</div>
            <StarRating value={movieReview.starRating} />
        </li>
    );
};

export default MovieReview;
