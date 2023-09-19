import styles from "./MovieReviewList.module.css";

import MovieReview from "./MovieReview";

const MovieReviewList = ({ movieReviews }) => {
    if (!movieReviews || movieReviews.length === 0) {
        return <div className={styles.empty}>아직 작성된 리뷰가 없습니다.</div>;
    }
    console.log(movieReviews)
    return (
        // <div>dd</div>
        <ul className={styles.movieReviewList}>
            {movieReviews.map((movieReview) => (
                <MovieReview key={movieReview.id} movieReview={movieReview} />
            ))}
        </ul>
    );
};

export default MovieReviewList;
