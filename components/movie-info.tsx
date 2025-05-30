import Link from "next/link";
import { API_URL } from "../constants";
import styles from "../styles/movie-info.module.css";

export async function getMovie(id: string) {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
}


export default async function MovieInfo({ id }: { id: string }) {
    const info = await getMovie(id);
    return (
        <div className={styles.container}>
            <img className={styles.poster} src={info.poster_path} alt={info.title} />
            <div className={styles.info}>
                <h1 className={styles.title}>{info.title}</h1>
                <h3>⭐️ {info.vote_average.toFixed(1)}</h3>
                <p>{info.overview}</p>
                <a href={info.homepage} target={"_blank"}>Homepage &rarr;</a>
                <Link href={`/movies/${id}/similar`}>비슷한 영화 보러가기 &rarr;</Link>
            </div>
        </div>
    )
}