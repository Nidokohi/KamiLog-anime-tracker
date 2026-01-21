
import { Anime } from "@/types/animeTypes";
import { getCurrentSeasonAnime } from "@/lib/getAnimeInfo";
import { Carousel } from "@/components";

export default async function SeasonAnimePage() {

    const anime: Anime[] = await getCurrentSeasonAnime().then(data => data.data);

    return (
        <div className="w-full bg-base-100 px-12 pt-5 my-5">
            <h3 className="text-2xl font-semibold tracking-wider mb-4 px-10">Winter 2026 Anime</h3>
            <Carousel content={anime} />
        </div>
    )   
}
    