
'use client'

import { Anime } from "@/types/animeTypes"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRef } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

function CarouselCard({ anime }: { anime: Anime }) {

    const router = useRouter();

    const handleClick = () => {
        router.push(`/anime/${anime.mal_id}`);
    }

    return (
        <div className="carousel-item snap-start flex-col items-center gap-2 p-2 shrink-0 w-44 bg-base-300 hover:cursor-pointer" onClick={handleClick}>
            <figure className="relative w-full h-64 overflow-hidden rounded-box bg-base-300">
                <Image
                    src={anime.images.webp.image_url}
                    alt={anime.title}
                    fill
                    className="object-cover"
                    sizes="176px"
                /> 
            </figure>
            <span className="font-bold tracking-wider text-center text-[12px] w-full line-clamp-2">{anime.title}</span>
        </div>
    )
}

export default function Carousel({ content }: { content: Anime[] }) {

    const carouselRef = useRef<HTMLDivElement>(null);

    const scrollByCard = (direction: "left" | "right") => {
        if (!carouselRef.current) return;

        const card = carouselRef.current.querySelector<HTMLElement>(
            '.carousel-item'
        );

        if (!card) return;

        const gap = 20;
        const scrollAmount = card.offsetWidth + gap;

        carouselRef.current.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
        });
    };


    return (
        <div className="relative gap-4 items-center flex w-full p-2 pb-8">

            <div className="h-full hover:bg-gray-500/20">
                <button
                    onClick={() => scrollByCard("left")}
                    className="btn btn-circle absolute left-0 top-1/2 z-10 -translate-y-1/2"
                    >
                    <ChevronLeft />
                </button>
            </div>
            
            <div ref={carouselRef} className="carousel carousel-center gap-5 px-2 w-full h-full scroll-smooth snap-x snap-mandatory overflow-x-auto scrollbar-visible ">
                {content.map((anime) => (
                    <CarouselCard key={anime.mal_id} anime={anime} />
                ))}
            </div>
                

            <div className="h-full hover:bg-gray-500/20">
                <button
                    onClick={() => scrollByCard("right")}
                    className="btn btn-circle absolute right-0 top-1/2 z-10 -translate-y-1/2"
                    >
                    <ChevronRight />
                </button>
            </div>
        </div>
    )
}
