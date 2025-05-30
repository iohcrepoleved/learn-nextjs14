import Link from "next/link";
import { API_URL } from "../app/(home)/page";
import styles from "../styles/movie-similar.module.css";

interface IMovieSimilarProps {
    title: string;
    id: string;
    poster_path: string;
}
export default function MovieSimilar({ id, title, poster_path }: IMovieSimilarProps) {
    return (
        <div>
            <img src={poster_path} className={styles.img} />
            <h1>{title}</h1>

        </div>

    )
}