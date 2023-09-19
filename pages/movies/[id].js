import Head from "next/head";
import { useState, useEffect } from "react";

import axios from "@/api/axios";
import styles from "@/styles/Movie.module.css";

import Spinner from "@/components/Spinner";
import MovieDetailInfo from "@/components/MovieDetail/MovieDetailInfo";
import MovieReviewList from "@/components/MovieReviewList";
import Dropdown from "@/components/Layout/Dropdown";
import Button from "@/components/UI/Button";

export const getServerSideProps = async (context) => {
    const targetId = context.params["id"];
    let movie;
    try {
        const res = await axios.get(`/movies/${targetId}`);
        movie = res.data;
    } catch {
        return {
            notFound: true,
        };
    }

    const res = await axios.get(`/movie_reviews/?movie_id=${targetId}`);
    const movieReviews = res.data.results ?? [];

    return {
        props: {
            movie,
            movieReviews,
        },
    };
};

const Movie = ({ movie, movieReviews: initialMovieReviews }) => {
    const [movieReviews, setMovieReviews] = useState(initialMovieReviews);
    const [formValue, setFormValue] = useState({
        sex: "male",
        age: 10,
        starRating: 1,
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            ...formValue,
            movieId: movie.id,
        };
        const res = await axios.post("/movie_reviews/", payload);
        const nextMovieReview = res.data;
        setMovieReviews((prev) => [nextMovieReview, ...prev]);
    };

    const handleChange = async (name, value) => {
        setFormValue({
            ...formValue,
            [name]: value,
        });
    };

    if (!movie)
        return (
            <div className={styles.loading}>
                <Spinner />
                <p>로딩중입니다. 잠시만 기다려주세요.</p>
            </div>
        );

    return (
        <>
            <Head>
                <title>{movie.title} - Watchit</title>
            </Head>
            <MovieDetailInfo movie={movie} />
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>소개</h2>
                <p className={styles.description}>{movie.description}</p>
                <span className={styles.readMore}>더보기</span>
            </section>
            <div className={styles.reviewSections}>
                <section>
                    <h2 className={styles.sectionTitle}>내 리뷰 작성하기</h2>
                    <form className={styles.reviewForm} onSubmit={handleSubmit}>
                        <label className={styles.label}>
                            성별
                            <Dropdown
                                className={styles.dropdown}
                                name="sex"
                                value={formValue.sex}
                                options={[
                                    { label: "남성", value: "male" },
                                    { label: "여성", value: "female" },
                                ]}
                                onChange={handleChange}
                            />
                        </label>
                        <label className={styles.label}>
                            연령
                            <Dropdown
                                className={styles.dropdown}
                                name="age"
                                value={formValue.age}
                                options={[
                                    { label: "10대", value: 10 },
                                    { label: "20대", value: 20 },
                                    { label: "30대", value: 30 },
                                    { label: "40대", value: 40 },
                                    { label: "50대", value: 50 },
                                ]}
                                onChange={handleChange}
                            />
                        </label>
                        <label className={styles.label}>
                            별점
                            <Dropdown
                                className={styles.dropdown}
                                name="starRating"
                                value={formValue.starRating}
                                options={[
                                    { label: "★☆☆☆☆", value: 1 },
                                    { label: "★★☆☆☆", value: 2 },
                                    { label: "★★★☆☆", value: 3 },
                                    { label: "★★★★☆", value: 4 },
                                    { label: "★★★★★", value: 5 },
                                ]}
                                onChange={handleChange}
                            />
                        </label>
                        <Button className={styles.submit}>작성하기</Button>
                    </form>
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
