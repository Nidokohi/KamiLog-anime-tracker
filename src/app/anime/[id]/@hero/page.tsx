
import { getAnimeInfo } from "@/lib/getAnimeInfo";
import { Anime } from "@/types/animeTypes";

type AnimeInfo = Pick<Anime, "mal_id" | "images" | "title" | "title_english" | "title_japanese" | "synopsis">;

export default async function HeroPage({ params }: { params: { id: string }}) {

    // const animeInfo = getAnimeInfo(params.id);
    const animeInfo: AnimeInfo = await getAnimeInfo("52991");

    

    return (
        <div className="card lg:card-side bg-base-300 px-10 pt-8 pb-6 gap-8 shadow-sm rounded-md items-center xl:items-start justify-items-start">
            <div className="flex flex-col gap-4 w-max h-max items-start">
                <figure className="image-full w-max h-max">
                    <img src={animeInfo.images.jpg.image_url} alt={animeInfo.title} />
                </figure>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                </div>
            </div>
            <div className="card-body p-0 gap-5 items-center xl:items-start justify-items-start">
                <div className="card-title flex-col gap-1 items-center xl:items-start">
                    <h2 className="card-title font-bold text-3xl">{animeInfo.title}</h2>
                    <h3 className="italic text-md">{animeInfo.title_english} / {animeInfo.title_japanese}</h3>
                </div> 
                <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-md">Synopsis:</h3>
                    <p className="text-xs whitespace-pre-line">{animeInfo.synopsis}</p>
                </div>
                             
            </div>
        </div>
    )
}