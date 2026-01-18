
import { AnimeTrailer } from "@/types/animeTypes";
import { AnimeEpisodesResponse, AnimeEpisode } from "@/types/episodeTypes";
import { getAnimeInfo, getAnimeEpisodes } from "@/lib/getAnimeInfo";
import { EmbedVid } from "@/components";
import { ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight } from "lucide-react";
import { Pagination } from "@/ui";
import Link from "next/link";


function EpisodesList({ episodes }: { episodes: AnimeEpisode}) {
    
    return (
        <div className="flex flex-col bg-base-200 p-3 px-5 rounded-md shadow-base-content/20 shadow-sm">
            <div className="flex flex-row gap-2">
                <h2 className="font-bold tracking-wide text-sm">Ep. {episodes.mal_id} -</h2>
                <div className="flex flex-col">
                    <h2 className="font-bold tracking-wide text-sm">{episodes.title}</h2>
                    <h3 className="italic text-xs font-light">{episodes.title_romanji} / {episodes.title_japanese}</h3>
                </div>
            </div>
        </div>
    )
}

export default async function AnimeEpisodesPage({ params, searchParams }: { params: { id: string, }, searchParams: { page?: string }}) {

    const animeId = (await params).id;

    const animeTrailer: AnimeTrailer = await getAnimeInfo(animeId).then(data => data.trailer!);

    const page = (await searchParams).page ? parseInt((await searchParams).page as string) : 1;

    const animeEpisodes: AnimeEpisodesResponse = await getAnimeEpisodes(animeId, page);

    const BASE_URL = `/anime/${animeId}`;

    const Episodes = () => {

        if(!animeEpisodes.data.length) {
            return (
                <span className="text-lg italic">No episodes available.</span>
            )
        }

        return (
            <>
                {animeEpisodes.data.map((episode: AnimeEpisode) => (
                    <EpisodesList key={episode.mal_id} episodes={episode} />
                ))}
                <Pagination baseUrl={BASE_URL} page={page} lastPage={animeEpisodes.pagination.last_visible_page} />
            </>
        )
    }

    return (
        <div className="flex flex-col gap-5 ">
            <div className="px-2">
            {animeTrailer.embed_url && <EmbedVid title="Trailer" url={animeTrailer.embed_url} />}
            </div>
            <div className="bg-base-300 h-max w-full p-4 px-5 gap-4 shadow-sm">
                <h2 className="font-bold text-xl" id="episodes">Episodes:</h2>
                <div className="flex flex-col gap-5 p-5">
                    {Episodes()}
                    
                </div>
            </div>
        </div>
    )
}
