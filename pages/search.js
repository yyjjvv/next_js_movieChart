import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import axios from "@/api/axios";
import styles from "@/styles/Search.module.css";
//components
import MovieList from "@/components/MovieList";
import SearchForm from "@/components/SearchForm";

const Search = () => {
    const [movies, setMovies] = useState([]);
    const router = useRouter();
    const { q } = router.query;

    const getMovies = async (query) => {
        const res = await axios.get(`/movies/?q=${query}`);
        const newMovies = res.data.results;
        setMovies(newMovies);
    };

    useEffect(() => {
        getMovies(q);
    }, [q]);

    return (
        <>
            <Head>
                <title>{q} 검색 결과 - Watchit</title>
            </Head>
            <SearchForm initialValue={q} />
            <h2 className={styles.title}>
                <span className={styles.keyword}>{q}</span> 검색 결과
            </h2>
            {movies ? (
                <MovieList movies={movies} />
            ) : (
                <div>검색한 결과가 없습니다.</div>
            )}
        </>
    );
};

export default Search;
