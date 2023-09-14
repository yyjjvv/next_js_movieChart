import { useState, useEffect } from "react";

import axios from "@/api/axios";
import styles from "@/styles/Home.module.css";
//components
import MovieList from "@/components/MovieList";
import SearchForm from "@/components/SearchForm";

const Home = () => {
    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        const res = await axios.get(`/movies`);
        const newMovies = res.data.results;
        setMovies(newMovies);
    };

    useEffect(() => {
        getMovies();
    }, []);
    return (
        <>
            <SearchForm />
            <MovieList className={styles.movieList} movies={movies} />
        </>
    );
};

export default Home;
