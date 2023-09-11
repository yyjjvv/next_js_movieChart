import { useRouter } from "next/router";

const Movie = () => {
    const router = useRouter();
    const { id } = router.query;

    return <div>Movie {id}</div>;
};

export default Movie;
