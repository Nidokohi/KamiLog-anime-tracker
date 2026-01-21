
import { Anime } from "@/types/animeTypes";
import { SmallCard } from "@/components";

type RankingsProps = {
    title: string;
    anime: Anime[];
}

export default function Rankings({ title, anime }: RankingsProps) {
    return (
        <div className="pb-5 border-b-2 border-base-300 gap-2 w-full">
            <h2 className="font-bold text-2xl m-2">{title}</h2>
            <div className="flex flex-col gap-2 w-full py-2">
                {anime.map((anime, index) => (
                    <SmallCard key={"top-" + anime.mal_id} index={index} anime={anime} />
                ))}
            </div>
        </div>
    )
}