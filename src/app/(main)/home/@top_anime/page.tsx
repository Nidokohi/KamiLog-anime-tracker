'use client'

import { getTopAnime } from "@/lib/getAnimeInfo";
import { Anime } from "@/types/animeTypes";
import { Rankings } from "@/components";
import { useEffect, useState } from "react";
import { delay } from "@/utils/delay";


export default  function TopAnimePage() {

    // const topAnime: Anime[] = await getTopAnime("tv").then(data => data.data);
    // const topUpcoming: Anime[] = await getTopAnime("tv", "upcoming").then(data => data.data);

    const [topAnime, setTopAnime] = useState<Anime[]>([]);
    const [topUpcoming, setTopUpcoming] = useState<Anime[]>([]);

   useEffect(() => {

        const fetchAnimes = async () => {
            await delay();
            const [topAnimeData, topUpcomingData] = await Promise.all([
                getTopAnime("tv").then(data => data.data),
                getTopAnime("tv", "upcoming").then(data => data.data)
            ]);
            setTopAnime(topAnimeData);
            setTopUpcoming(topUpcomingData);
        };
        fetchAnimes();
        
    }, []);

    return (
        <div className="h-full w-full p-2 px-3 pb-5 flex flex-col gap-2 items-center justify-items-center border-l-2 border-base-300">
            <Rankings title="Top Anime" anime={topAnime} />
            <Rankings title="Top Upcoming" anime={topUpcoming} />
        </div>
    )

}