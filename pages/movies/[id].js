import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import axios from "@/api/axios";
import styles from "@/styles/Movie.module.css";
import labels from "@/data/labels";

import Container from "@/components/Layout/Container";
import Header from "@/components/Layout/Header";
import MovieReviewList from "@/components/MovieReviewList";

const Movie = () => {
    const [movie, setMovie] = useState();
    const [movieReviews, setMovieReviews] = useState([]);
    const router = useRouter();
    const { id } = router.query;

    const getMovie = async (targetId) => {
        const res = await axios.get(`/movies/${targetId}`);
        const newMovie = res.data;
        setMovie(newMovie);
    };

    const getMovieReviews = async (targetId) => {
        const res = await axios.get(`/movie_reviews/?movie_id=${targetId}`);
        const newMovieReviews = res.data;
        setMovieReviews(newMovieReviews);
    };

    useEffect(() => {
        if (!id) return;
        getMovie(id);
        getMovieReviews(id);
    }, [id]);

    if (!movie) return null;

    return (
        <>
            <Header />
            <Container page>
                <div className={styles.header}>
                    <img
                        className={styles.poster}
                        src={movie.posterUrl}
                        alt={movie.name}
                    />
                    <div className={styles.info}>
                        <div className={styles.englishTitle}>
                            {movie.englishTitle}
                        </div>
                        <h1 className={styles.title}>{movie.title}</h1>
                        <table className={styles.infoTable}>
                            <tbody>
                                <tr>
                                    <th>개봉</th> <td>{movie.date}</td>
                                </tr>
                                <tr>
                                    <th>장르</th> <td>{movie.genre}</td>
                                </tr>
                                <tr>
                                    <th>국가</th> <td>{movie.country}</td>
                                </tr>
                                <tr>
                                    <th>등급</th>{" "}
                                    <td>{labels.rating[movie.rating]}</td>
                                </tr>
                                <tr>
                                    <th>러닝타임</th>{" "}
                                    <td>{movie.runningTime}분</td>
                                </tr>
                                <tr>
                                    <th>평점</th>{" "}
                                    <td className={styles.starRating}>
                                        ★{movie.starRating}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>소개</h2>
                    <p className={styles.description}>{movie.description}</p>
                    <span className={styles.readMore}>더보기</span>
                </section>
                <div className={styles.reviewSections}>
                    <section>
                        <h2 className={styles.sectionTitle}>
                            내 리뷰 작성하기
                        </h2>
                    </section>
                    <section>
                        <h2 className={styles.sectionTitle}>리뷰</h2>
                        <MovieReviewList movieReviews={movieReviews} />
                    </section>
                </div>
            </Container>
        </>
    );
};

export default Movie;
