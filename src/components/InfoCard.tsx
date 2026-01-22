

import { Anime } from "@/types/animeTypes";
import { Star } from "lucide-react";
import Image from "next/image";

function ExtraInfo({ label, value }: { label: string; value: string }) {

    return (
        <div className="flex flex-row gap-2 items-center">
            <span className="text-[10px] font-semibold text-gray-400">{label}:</span>
            <span className="text-[10px] font-normal">{value}</span>
        </div>
    )
}


type InfoCardProps = {
    anime: Anime;
    hasTime?: boolean;
    hasRating?: boolean;
}

export default function InfoCard({ anime, hasTime = true, hasRating = true }: InfoCardProps) {

    const EXTRA_INFO = [
        { label: "Type", value: anime.type || "N/A" },
        { label: "Rating", value: anime.rating || "N/A" },
        { label: "Studios", value: anime.studios.map(studio => studio.name).join(", ") || "N/A" },

    ]

    const MAIN_INFO = [
        { label: "Episodes", value: anime.episodes?.toString() || "N/A" },
        { label: "Status", value: anime.status || "N/A" },
        
    ]

    const altTitles = [anime.title_english, anime.title_japanese].filter(Boolean).join(" / ");

    return (
        
        <div className="card card-border bg-base-300 shadow-sm p-2">
            <div className="card-body gap-1 items-center justify-items-center p-5">
                <div className="flex flex-col items-center justify-items-center w-full ">
                    <a href={`/anime/${anime.mal_id}`} className="card-title font-bold tracking-wide text-sm hover:underline text-center line-clamp-2">{anime.title}</a>
                    <h3 className="italic text-[10px] text-center line-clamp-2">{altTitles}</h3>
                </div>
                <div className="divider my-0" />
                <div className="flex flex-col gap-2 w-full items-center justify-items-center">
                    <div className="flex flex-row gap-4">
                        {MAIN_INFO.map((info, index) => (
                            <ExtraInfo key={index} label={info.label} value={info.value} />
                        ))}
                    </div>                    
                    <div className="flex flex-wrap gap-2 justify-center">
                        {anime.genres?.map((genre, index) => (
                            <div key={index} className="badge badge-sm">
                                {genre.name}
                            </div>
                        )) ?? <span className="text-xs text-gray-400">No genres</span>}
                    </div>
                </div>
            </div>
            <div className="flex flex-row items-start justify-center bg-base-100 gap-1 p-1 border-y-2 border-base-300 w-full">
                <figure className="p-2 shrink-0">
                    <a href={`/anime/${anime.mal_id}`} className="hover:cursor-pointer">
                        <Image src={anime.images.webp.image_url} alt={anime.title} width={150} height={250}/>
                    </a>
                </figure>
                <div className="card-body overflow-y-auto p-1 gap-2 w-2/3 h-50">
                    <p className="text-[10px]  whitespace-pre-wrap">{anime.synopsis || "No Synopsis Available"}</p>
                    <div className="divider my-1" />
                    <div className="flex flex-col gap-2">
                        {EXTRA_INFO.map((info, index) => (
                            <ExtraInfo key={index} label={info.label} value={info.value} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="card-actions">
                <div className="flex flex-row p-4 justify-between items-center w-full">
                    {/* <button className="btn btn-primary btn-sm">Add to List</button> */}
                    <span className="font-bold tracking-wide text-green-700 text-xl justify-items-center items-center gap-2">
                        { anime.broadcast?.time && hasTime ? 
                        <>
                            {anime.broadcast?.time} 
                            <span className="text-sm text-gray-400"> (JST)</span>
                        </> 
                        : ""}
                        { hasRating && anime.score !== null ?
                            <div className="text-sm font-thin tracking-widest text-base-content items-center justify-items-center flex flex-row gap-2">
                                <Star className="inline" fill="yellow" stroke="black" size={20}/> 
                                {anime.score}
                            </div>
                        : "" }
                    </span>
                </div>
            </div>
        </div>
    )
}   
