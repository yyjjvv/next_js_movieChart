import styles from "./MovieList.module.css";

import Movie from "./Movie";

const MovieList = ({ className = "", movies }) => {
    return (
        <ul className={`${styles.movieList} ${className}`}>
            {movies.map((movie) => (
                <Movie key={movie.id} movie={movie} />
            ))}
        </ul>
    );
};

export default MovieList;
