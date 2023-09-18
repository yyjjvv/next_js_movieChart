import Head from "next/head";

import axios from "@/api/axios";
import styles from "@/styles/Search.module.css";
//components
import MovieList from "@/components/MovieList";
import SearchForm from "@/components/SearchForm";

export const getServerSideProps = async (context) => {
    const q = context.query["q"];
    const res = await axios.get(`/movies/?q=${q}`);
    const movies = res.data.results;
    return {
        props: {
            q,
            movies,
        },
    };
};

const Search = ({ q, movies }) => {

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
