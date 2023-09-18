import Head from "next/head";
import { useState, useEffect } from "react";

import axios from "@/api/axios";
import styles from "@/styles/Home.module.css";
//components
import MovieList from "@/components/MovieList";
import SearchForm from "@/components/SearchForm";

export const getStaticProps = async () => {
    const res = await axios.get(`/movies`);
    const movies = res.data.results;
    return {
        props: {
            movies,
        },
    };
};

const Home = ({ movies }) => {
    return (
        <>
            <Head>
                <title>Watchit</title>
            </Head>
            <SearchForm />
            <MovieList className={styles.movieList} movies={movies} />
        </>
    );
};

export default Home;
