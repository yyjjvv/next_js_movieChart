import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import axios from "@/api/axios";
import styles from "@/styles/Movie.module.css";

import Container from "@/components/Layout/Container";
import Header from "@/components/Layout/Header";
import MovieDetailInfo from "@/components/MovieDetail/MovieDetailInfo";
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
            <MovieDetailInfo movie={movie} />
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>소개</h2>
                <p className={styles.description}>{movie.description}</p>
                <span className={styles.readMore}>더보기</span>
            </section>
            <div className={styles.reviewSections}>
                <section>
                    <h2 className={styles.sectionTitle}>내 리뷰 작성하기</h2>
                </section>
                <section>
                    <h2 className={styles.sectionTitle}>리뷰</h2>
                    <MovieReviewList movieReviews={movieReviews} />
                </section>
            </div>
        </>
    );
};

export default Movie;
