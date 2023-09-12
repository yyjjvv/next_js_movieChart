import styles from "./MovieDetailInfo.module.css";
import labels from "@/data/labels";

const MovieDetailInfo = ({ movie }) => {
    return (
        <div className={styles.header}>
            <img
                className={styles.poster}
                src={movie.posterUrl}
                alt={movie.name}
            />
            <div className={styles.info}>
                <div className={styles.englishTitle}>{movie.englishTitle}</div>
                <h1 className={styles.title}>{movie.title}</h1>
                <div className={styles.infoTable}>
                    <ul>
                        <li>
                            <span className={styles.infoTitle}>개봉</span> <span>{movie.date}</span>
                        </li>
                        <li>
                            <span className={styles.infoTitle}>장르</span> <span>{movie.genre}</span>
                        </li>
                        <li>
                            <span className={styles.infoTitle}>국가</span> <span>{movie.country}</span>
                        </li>
                        <li>
                            <span className={styles.infoTitle}>등급</span> <span>{labels.rating[movie.rating]}</span>
                        </li>
                        <li>
                            <span className={styles.infoTitle}>러닝타임</span> <span>{movie.runningTime}분</span>
                        </li>
                        <li>
                            <span className={styles.infoTitle}>평점</span>{" "}
                            <span className={styles.starRating}>
                                ★{movie.starRating}
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MovieDetailInfo;
