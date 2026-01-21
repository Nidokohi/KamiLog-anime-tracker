
import { getTopAnime } from "@/lib/getAnimeInfo";
import { Anime } from "@/types/animeTypes";
import { HeroCarousel } from "@/components";

export default async function TopAiringPage() {

    const topAiringAnime: Anime[] = await getTopAnime("tv", "airing").then(data => data.data);

    return (
        <div className="w-full">
            <HeroCarousel content={topAiringAnime} />
        </div>
    )
}
