
'use client'

import { Anime } from "@/types/animeTypes";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";


function CarouselItem({ anime }: { anime: Anime }) {


    const formatGenre = (genres: { name: string }[]) => {
        return genres.map(genre => genre.name).join(", ");
    }

   const router = useRouter();
   
    const handleClick = () => {
        router.push(`/anime/${anime.mal_id}`);
    }

    return (
            <div id={anime.mal_id.toString()} className="carousel-item relative shrink-0 w-full py-6 bg-cover bg-center hover:cursor-pointer" onClick={handleClick}
                style={{
                    backgroundImage: `url(${anime.images.webp.image_url})`,
                }}>
                <div className="absolute inset-0 z-0 bg-black/20 backdrop-blur-xl" />
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/70 to-black/20" />
                <div className="relative flex flex-row gap-5 w-full h-max items-start z-20 px-20">
                    <figure className="image-full w-max h-max">
                        <Image
                            src={anime.images.webp.image_url}
                            alt={anime.title}
                            width={250}
                            height={350}
                        />
                    </figure>
                    <div className="relative z-10 flex flex-col gap-6 items-start w-full px-5">
                        <div className="flex-col gap-1 items-center xl:items-start w-max">
                            <h2 className="font-bold text-2xl tracking-wider">{anime.title}</h2>
                            <h3 className="italic text-sm">{anime.title_english} / {anime.title_japanese}</h3>
                        </div>
                        <span className="text-xs font-bold tracking-wide">
                            {formatGenre(anime.genres)}
                        </span>
                        <p className="text-xs whitespace-pre-line ">{anime.synopsis}</p>
                    </div>
                </div>
            </div>
    )
}

type HeroCarouselProps = {
    content: Anime[];
}

export default function HeroCarousel({ content }: HeroCarouselProps) {

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) =>
                prevIndex === content.length - 1 ? 0 : prevIndex + 1
            );
        }, 10000); 

        return () => clearInterval(interval);
    }, [content.length, activeIndex]);

    return ( 
        <>
            <div className=" w-full overflow-hidden">
                <div className="flex transition-transform duration-800 ease-out"
                    style={{
                        transform: `translateX(-${activeIndex * 100}%)`,
                    }}>
                    {content.map((anime) => (
                        <CarouselItem key={anime.mal_id} anime={anime} />
                    ))}            
                </div>
            </div>
            <div className="relative flex w-full justify-center gap-2 z-10">
                {content.map((anime, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`
                            btn btn-xs btn-circle transition
                            ${activeIndex === index
                                ? "bg-primary scale-110"
                                : "bg-base-300 hover:bg-neutral scale-100"}
                        `}
                    />
                ))}
            </div>
        </>
    )
}
