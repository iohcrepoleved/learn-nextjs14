import { Suspense } from "react";
import { API_URL } from "../../../(home)/page";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

interface IParams {
    params: { id: string }
}

export async function generateMetadata({ params: { id } }: IParams) {
    const movie = await getMovie(id)
    return {
        title: movie.title
    }
}

export default async function MovieDetail({
    params
}) {
    const { id } = await params;
    return (
        <div>
            <Suspense fallback={<h1>Loading movie info</h1>}>
                {/* @ts-expect-error Async Server Component */}
                <MovieInfo id={id}></MovieInfo>

            </Suspense>
            <Suspense fallback={<h1>Loading movie videos</h1>}>
                {/* @ts-expect-error Async Server Component */}
                <MovieVideos id={id}></MovieVideos>

            </Suspense>

        </div>
    );
}

