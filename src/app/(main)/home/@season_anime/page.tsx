
'use client'

import { Anime } from "@/types/animeTypes";
import { getCurrentSeasonAnime } from "@/lib/getAnimeInfo";
import { Carousel } from "@/components";
import { useEffect, useState } from "react";


export default function SeasonAnimePage() {

    // const anime: Anime[] = await getCurrentSeasonAnime().then(data => data.data);

    const [anime, setAnime] = useState<Anime[]>([]);

    useEffect(() => {

        const fetchSeasonAnime = async () => {
            const seasonAnimeData = await getCurrentSeasonAnime().then(data => data.data);
            setAnime(seasonAnimeData);
        }
        fetchSeasonAnime();
    }, []);

    return (
        <div className="w-full bg-base-100 px-12 pt-5 my-5">
            <h3 className="text-2xl font-semibold tracking-wider mb-4 px-10">Winter 2026 Anime</h3>
            <Carousel content={anime} />
        </div>
    )   
}
    