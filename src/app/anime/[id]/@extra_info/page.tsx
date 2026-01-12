
import { formatDate } from "@/utils/dateFormatter";
import { Aired, AnimeGenre, Anime } from "@/types/animeTypes";
import { getAnimeInfo } from "@/lib/getAnimeInfo";


function InfoRow({ label, value }: { label: string; value: string | Aired | AnimeGenre[] }) {
    
    const formatLabel = (label: string) => {
        return label.charAt(0).toUpperCase() + label.slice(1).replace("_", " ");
    }
    
    if (label === "status") {

        const statusColors = {
            "Finished Airing": "text-green-500",
            "Currently Airing": "text-yellow-500",
            "Not yet aired": "text-gray-500"
        };

        return (
            <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold text-gray-400">{formatLabel(label)}</span>
                <span className={`text-sm font-bold tracking-wide underline underline-offset-1 ${statusColors[value as keyof typeof statusColors] || "text-white"}`}>
                    {value.toString()}
                </span>
            </div>
        )
    }
    else if (label === "aired") {

        const startDate = formatDate((value as Aired).from || " ");
    const endDate = (value as Aired)?.to ? formatDate((value as Aired).to || " ") : "---";

        return (
            <>
                <div className="flex flex-col gap-1">
                        <span className="text-xs font-semibold text-gray-400">Start Date:</span>
                        <span className="text-sm font-normal">{startDate}</span>
                </div>
                <div className="flex flex-col gap-1">
                        <span className="text-xs font-semibold text-gray-400">End Date:</span>
                        <span className="text-sm font-normal">{endDate}</span>
                </div>
            </>
        )
    }
    else if (label === "genres" || label === "demographics") {

        return (
            <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold text-gray-400">{formatLabel(label)}</span>
                <div className="flex flex-col gap-2">
                    {(value as AnimeGenre[]).map((genre) => (
                        <span key={genre.mal_id} className="text-sm font-normal">{genre.name}</span>
                    ))}
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold text-gray-400">{formatLabel(label)}</span>
                <span className="text-sm font-normal">{value.toString()}</span>
            </div>
        )
    }   
}


// type ExtraInfo = Pick<Anime, "type" | "year" | "episodes" | "status" | "duration" | "rating" | "aired" | "genres" | "demographics">;

export default async function ExtraInfoPage({ params }: { params: { id: string }}) {

    const animeInfo: Anime = await getAnimeInfo("52991");
    
    const animeKeys = ["type", "year", "episodes", "status", "duration", "rating", "aired", "genres", "demographics"];

    return (
        <div className="bg-base-300 h-max w-full p-5 gap-20 rounded-md shadow-sm">
            <div className="flex flex-col gap-4">
                {animeKeys.map((key) => (
                    <InfoRow key={key} label={key} value={animeInfo[key as keyof Anime] as string | Aired | AnimeGenre[]} />
                ))}
            </div>        
        </div>
    )
}
