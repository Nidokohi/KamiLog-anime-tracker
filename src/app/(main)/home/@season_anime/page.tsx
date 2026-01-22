
'use client'

import { Anime } from "@/types/animeTypes";
import { getCurrentSeasonAnime } from "@/lib/getAnimeInfo";
import { Carousel } from "@/components";
import { useEffect, useState } from "react";
import { delay } from "@/utils/delay";


export default function SeasonAnimePage() {

    // const anime: Anime[] = await getCurrentSeasonAnime().then(data => data.data);

    const [anime, setAnime] = useState<Anime[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {

        const fetchSeasonAnime = async () => {
            setLoading(true);
            await delay();
            const seasonAnimeData = await getCurrentSeasonAnime().then(data => data.data);
            setAnime(seasonAnimeData);
            setLoading(false);
        };
        fetchSeasonAnime();
    }, []);

    return (
        <div className="w-full bg-base-100 px-12 pt-5 my-5">
            <h3 className="text-2xl font-semibold tracking-wider mb-4 px-10">Winter 2026 Anime</h3>
            {
                loading ? 
                <div className="flex flex-row gap-10 w-full h-full p-2 items-center justify-center">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="skeleton h-72 w-48"></div> 
                    ))}
                </div> : <Carousel content={anime} />
            }
        </div>
    )   
}
    