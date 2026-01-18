
import { formatDate } from "@/utils/dateFormatter";
import { Aired, AnimeGenre, Anime } from "@/types/animeTypes";
import { getAnimeInfo } from "@/lib/getAnimeInfo";


function InfoRow({ label, value }: { label: string; value: string | Aired | AnimeGenre[] }) {
    
    const formatLabel = (label: string) => {

        if (!label) return "---";

        return label.charAt(0).toUpperCase() + label.slice(1);
    }
    
    if (label === "status") {

        const statusColors = {
            "Finished Airing": "text-green-600",
            "Currently Airing": "text-yellow-600",
            "Not yet aired": "text-gray-600"
        };

        return (
            <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold text-gray-400">{formatLabel(label)}</span>
                <span className={`text-sm font-bold tracking-wider underline underline-offset-1 ${statusColors[value as keyof typeof statusColors] || "text-white"}`}>
                    {value.toString()}
                </span>
            </div>
        )
    }
    else if (label === "aired") {

        const startDate = formatDate((value as Aired)?.from);
        const endDate = formatDate((value as Aired)?.to);


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
    else if (label === "genres" || label === "demographics" || label === "studios") {

        if (!(value as AnimeGenre[]).length) {
            return (
                <div className="flex flex-col gap-1">
                    <span className="text-xs font-semibold text-gray-400">{formatLabel(label)}</span>
                    <span className="text-sm font-normal">---</span>
                </div>
            )
        }
        return (
            <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold text-gray-400">{formatLabel(label)}</span>
                <div className="flex flex-col gap-1">
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
                <span className="text-sm font-normal">{formatLabel(value?.toString())}</span>
            </div>
        )
    }   
}


export default async function ExtraInfoPage({ params }: { params: { id: string }}) {

    const animeId = (await params).id;

    const animeInfo: Anime = await getAnimeInfo(animeId);
    
    const animeKeys = ["type", "season", "year", "episodes", "status", "duration", "rating", "aired", "genres", "demographics", "studios"];

    return (
        <div className="bg-base-300 h-full w-full p-5 gap-20 shadow-sm">
            <div className="flex flex-col gap-3 sticky top-5">
                {animeKeys.map((key) => (
                    <InfoRow key={key} label={key} value={animeInfo[key as keyof Anime] as string | Aired | AnimeGenre[]} />
                ))}
            </div>        
        </div>
    )
}
