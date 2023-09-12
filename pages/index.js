import { useState, useEffect } from "react";

import axios from "@/api/axios";
import styles from "@/styles/Home.module.css";
//components
import Header from "@/components/Layout/Header";
import Container from "@/components/Layout/Container";
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
            <Header />
            <Container page>
                <SearchForm />
                <MovieList className={styles.movieList} movies={movies} />
            </Container>
        </>
    );
};

export default Home;
