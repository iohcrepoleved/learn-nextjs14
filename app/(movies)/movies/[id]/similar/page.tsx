import { Suspense } from "react";
import { API_URL } from "../../../../(home)/page";
import MovieSimilar from "../../../../../components/movie-similar";
import styles from "../../../../../styles/movie-similar.module.css";


async function getSimilarMovie(id: string) {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    const response = await fetch(`${API_URL}/${id}/similar`);
    return response.json();
}

export default async function Similar({
    params
}) {
    const { id } = await params;
    const movies = await getSimilarMovie(id);
    return (
        <div className={styles.container}>
            {movies.map(movie => (
                <MovieSimilar key={movie.id} id={movie.id} poster_path={movie.poster_path} title={movie.title} />
            ))}
        </div>
    );
}