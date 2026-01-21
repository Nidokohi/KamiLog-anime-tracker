'use client'

import { Anime } from "@/types/animeTypes";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Star } from "lucide-react";

type SmallCardProps = {
    index: number;
    anime: Anime;
}

export default function SmallCard({ index, anime }: SmallCardProps) {

    const router = useRouter();
    
    const handleClick = () => {
        router.push(`/anime/${anime.mal_id}`);
    }

    return (
        <div className="small-card flex flex-row bg-base-200 p-2 gap-4 hover:cursor-pointer" onClick={handleClick}>   
            <div className="flex flex-col gap-4 w-max h-max items-start">
                <figure className="image-full w-max h-max">
                    <Image
                        src={anime.images.webp.image_url}
                        alt={anime.title}
                        width={60}
                        height={80}
                    />
                </figure>
            </div>
            <div className="card-body p-0 gap-2 items-center xl:items-start justify-items-start">
                <div className="card-title flex-col gap-1 items-center xl:items-start">
                    <h2 className="card-title font-bold text-xs tracking-wider line-clamp-2">{anime.title}</h2>
                    <h3 className="italic text-[11px] line-clamp-2">{anime.title_english} / {anime.title_japanese}</h3>
                </div> 
                <div className="flex flex-row gap-5 justify-items-center items-center">
                    <span className="text-md font-bold tracking-widest text-base-content">#{index+1}</span>
                    { anime.score !== null &&
                        <span className="text-xs font-thin tracking-widest text-base-content items-center justify-items-center flex flex-row gap-2"><Star fill="yellow" stroke="black" size={18}/> {anime.score}</span>
                    }
                </div>      
            </div>
        </div>
    )
}
