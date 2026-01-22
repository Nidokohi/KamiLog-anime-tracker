
'use client';

import { useEffect, useState } from "react";
import { getAnimeSearch } from "@/lib/getAnimeInfo";
import { useSearchParams } from "next/navigation";
import { AnimeResponse } from "@/types/animeTypes";
import { InfoCard } from "@/components";
import { Pagination } from "@/ui";
import { delay } from "@/utils/delay";

export default function SearchResults() {
    
    // { searchParams }: { searchParams?: { q: string, page?: string } }

    // const query = (await searchParams)?.q ?? "";    
    // const page = (await searchParams)?.page ? parseInt((await searchParams)?.page as string) : 1;

    const searchParams = useSearchParams();

    const query = searchParams.get("q") ?? "";
    const page = Number(searchParams.get("page") ?? 1);

    const params: SearchParams = {
        q: query,
        type: undefined,
        sfw: undefined,
        orderBy: undefined,
        sort: "asc",
        page: page,
        limit: 15, 
    }
    
    const BASE_URL = `/search?q=${query}`;
    
    // const searchResults: AnimeResponse = await getAnimeSearch(params);

    const [searchResults, setSearchResults] = useState<AnimeResponse>({ data: [], pagination: { last_visible_page: 1, has_next_page: false } });
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {

        if (!query) return;

        const fetchSearchResults = async () => {
            setLoading(true);
            await delay();
            const results = await getAnimeSearch(params);
            setSearchResults(results);
            setLoading(false);
        }
        fetchSearchResults();
    }, [query, page]);

    return (
      <div className="flex flex-col items-center justify-items-start py-4 gap-5 h-full w-full px-4 ">  
            <h1 className="font-bold text-xl pb-2 border-b-2 border-base-300 w-full text-center">Search Results for &quot;{query}&quot;</h1>
            <div className="p-5 grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 w-full">
                    {loading ? (
                        Array.from({ length: 6 }).map((_, i) => (
                            <div key={i} className="skeleton h-80 w-full rounded-lg"></div>
                        ))
                    ) : query === "" ? (
                        <p className="text-center col-span-3 p-4 text-xl w-full bg-base-300 font-bold tracking-wider border-2 border-red-400">
                            Please enter a search query.
                        </p>
                    ) : searchResults.data.length === 0 ? (
                        <p className="text-center col-span-3 p-4 text-xl w-full bg-base-300 font-bold tracking-wider">
                            No results found for &quot;{query}&quot;.
                        </p>
                    ) : (
                        searchResults.data.map((anime) => (
                            <InfoCard key={anime.mal_id} anime={anime} hasRating={true} hasTime={false}/>
                        ))
                    )}
            </div>
            { query && searchResults.pagination.last_visible_page > 1 && (
                <Pagination baseUrl={BASE_URL} page={page} lastPage={searchResults.pagination.last_visible_page} />
            )}
      </div>
    );  
}