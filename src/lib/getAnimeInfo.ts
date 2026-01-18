
import { cache } from "react"
import { Anime, AnimeResponse } from "@/types/animeTypes"
import { AnimeEpisodesResponse } from "@/types/episodeTypes";
import { removeDupes } from "@/utils/removeDupes";

const JIKAN_API = process.env.NEXT_PUBLIC_JIKAN_API_URL;

const REVALIDATE = 86400 / 2; // 12 hours

export const getAnimeInfo = cache(async (id: string | number) => {
    
    const res = await fetch(`${JIKAN_API}/anime/${id}`, {
        next: { revalidate: 86400 }
    })
    if (!res.ok) {
        throw new Error("Failed to fetch anime info")
    }   

    const data = await res.json();

    // console.log(data);

    return data.data as Anime;
});

export const getAnimeEpisodes = cache(async (id: string, page: number) => {
    const res = await fetch(`${JIKAN_API}/anime/${id}/episodes?page=${page}`, {
        next: { revalidate: REVALIDATE }
    });
    if (!res.ok) {
        throw new Error("Failed to fetch anime episodes")
    }
    const data = await res.json();

    // console.log(data);

    return data as AnimeEpisodesResponse;
});

export const getTopAnime = cache(async (type?: string, filter?: string, page: number = 1, limit: number = 10) => {

    const params = new URLSearchParams();

    if (type) params.append("type", type);
    if (filter) params.append("filter", filter);
    
    params.append("page", page.toString());
    // params.append("limit", limit.toString());

    const res = await fetch(`${JIKAN_API}/top/anime?${params.toString()}`, {
        next: { revalidate: REVALIDATE }
    });
    

    if (!res.ok) {
        throw new Error("Failed to fetch top anime")
    }   
    const data = await res.json();

    const orderedData = [...data.data].sort(
        (a: Anime, b: Anime) => (a.rank ?? Infinity) - (b.rank ?? Infinity)
     );

    // console.log(data);

    // console.log(orderedData);

    const uniqueData = removeDupes(orderedData).slice(0, limit);

    return { ...data, data: uniqueData } as AnimeResponse;
    // return data as AnimeResponse;
});

export const getCurrentSeasonAnime = cache(async () => {
    const res = await fetch(`${JIKAN_API}/seasons/now`, {
        next: { revalidate: REVALIDATE }
    });

    if (!res.ok) {
        throw new Error("Failed to fetch current season anime")
    }
    
    const data = await res.json();  

    return data as AnimeResponse;
});


export const getAnimeSchedule = async (day?: string, kids?: boolean, sfw?: boolean) => {

    const params = new URLSearchParams();

    if (day) params.append("filter", day);

    if (kids !== undefined) params.append("kids", String(kids));
    
    params.append("sfw", String(sfw ?? true));

    const res = await fetch(`${JIKAN_API}/schedules?${params.toString()}`, {
        next: { 
            revalidate: REVALIDATE,
            tags: day ? [`schedule-${day}`] : ["schedules-all"]
        }
    });

    
    if (!res.ok) {
        throw new Error("Failed to fetch anime schedule")
    }
    const data = await res.json();

    const orderedData = [...data.data].sort(
        (a: Anime, b: Anime) => (b.members ?? Infinity) - (a.members ?? Infinity)
    );

    const uniqueData = removeDupes(orderedData);

    return { ...data, data: uniqueData } as AnimeResponse;
};


export const getAnimeSearch = async({q, type, sfw, orderBy, sort="asc", page = 1, limit = 15}: SearchParams) => {

    const params = new URLSearchParams();
  
    params.append("q", q);
    if (type !== undefined) params.append("type", type);
    if (sfw !== undefined) params.append("sfw", String(sfw));
    if (orderBy !== undefined) params.append("order_by", orderBy);
    params.append("sort", sort);

    params.append("page", page.toString());
    params.append("limit", limit.toString());
    
    console.log(params.toString());

    const res = await fetch(`${JIKAN_API}/anime?${params.toString()}`);

    if (!res.ok) {
        throw new Error("Failed to fetch anime search results")
    }

    const data = await res.json();
    
    return data as AnimeResponse;
};