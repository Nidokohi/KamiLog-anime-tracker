
import { AnimeTrailer } from "@/types/animeTypes";
import { AnimeEpisodesResponse, AnimeEpisode } from "@/types/episodeTypes";
import { getAnimeInfo, getAnimeEpisodes } from "@/lib/getAnimeInfo";



function EpisodesList({ episodes }: { episodes: AnimeEpisode[] }) {
    return (
        <div>
            {/* Episodes will be listed here */}
        </div>
    )
}

export default async function AnimeEpisodesPage({ params }: { params: { id: string }}) {

    const animeTrailer: AnimeTrailer = await getAnimeInfo("52991").then(data => data.trailer!);
    const animeEpisodes: AnimeEpisodesResponse = await getAnimeEpisodes("52991", 1);

    return (
        <div className="flex flex-col gap-5 py-2">
            <div className="flex flex-col gap-4 w-full mb-6 ">
                <h2 className="font-bold text-2xl">Trailer:</h2>
                <iframe
                    width="640"
                    height="360"
                    allowFullScreen
                    className="rounded-md shadow-sm"
                    src={animeTrailer.embed_url?.toString()}
                >
                </iframe>    
            </div>
            <div className="bg-base-300 h-max w-full p-5 gap-4 rounded-md shadow-sm">
                <h2 className="font-bold text-2xl">Episodes:</h2>
                <EpisodesList episodes={animeEpisodes.data} />
            </div>
        </div>
    )
}
