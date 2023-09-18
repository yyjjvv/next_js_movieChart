import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import axios from "@/api/axios";
import styles from "@/styles/Movie.module.css";

import Spinner from "@/components/Spinner";
import MovieDetailInfo from "@/components/MovieDetail/MovieDetailInfo";
import MovieReviewList from "@/components/MovieReviewList";

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
    const movieReviews = res.data ?? [];

    return {
        props: {
            movie,
            movieReviews,
        },
    };
};

const Movie = ({ movie, movieReviews }) => {

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
