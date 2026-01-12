
import { cache } from "react"
import { Anime } from "@/types/animeTypes"
import { AnimeEpisode, AnimeEpisodesResponse } from "@/types/episodeTypes";

const JIKAN_API = process.env.NEXT_PUBLIC_JIKAN_API_URL;

export const getAnimeInfo = cache(async (id: string) => {
    const res = await fetch(`${JIKAN_API}/anime/${id}`)
    if (!res.ok) {
        throw new Error("Failed to fetch anime info")
    }   

    const data = await res.json();

    console.log(data);

    return data.data as Anime;
});

export const getAnimeEpisodes = cache(async (id: string, page: number) => {
    const res = await fetch(`${JIKAN_API}/anime/${id}/episodes?page=${page}`);
    if (!res.ok) {
        throw new Error("Failed to fetch anime episodes")
    }
    const data = await res.json();

    return data.data as AnimeEpisodesResponse;
});