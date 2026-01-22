
import { Anime } from "@/types/animeTypes";
import { getAnimeSchedule } from "@/lib/getAnimeInfo";
import { InfoCard } from "@/components";

function TabContent({ day, isToday, data }: { day: string, isToday: boolean, data: Anime[] }) {

    

    return (
        <>
            <input type="radio" name="day_tabs" className="tab mx-1" id={day} aria-label={day} defaultChecked={isToday} />
            <div className="tab-content border-base-300 bg-base-100 p-5">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 gap-4">
                    { data.length === 0 && (
                        <p className="text-center col-span-2">No anime scheduled for {day}.</p>
                    )}
                    {data.map((anime) => (
                        <InfoCard key={anime.mal_id} anime={anime} hasRating={false}/>
                    ))}
                </div>
            </div>
        </> 
    )
}

export default async function AnimeSchedulePage() {

    const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const todayIndex = new Date().getDay(); 
    const today = DAYS[todayIndex];

    
    const sleep = (ms: number) =>
        new Promise(resolve => setTimeout(resolve, ms));
    
    const data: Anime[][] = DAYS.map(() => []);

    for (let i = 0; i < DAYS.length; i++) {
        try {
            const res = await getAnimeSchedule(DAYS[i].toLowerCase(), false);
            data[i] = res.data;
        } catch (e) {
            data[i] = [];
        }
        await sleep(400);
    }
    
    return (
        <div className="flex flex-col items-center w-full pt-5">
            <h2 className="font-bold w-full text-3xl text-center tracking-wider mb-4 border-b-2 border-base-300 pb-3">Anime Schedule</h2>
            <div className="tabs tabs-md tabs-border w-full h-full justify-end">
                {DAYS.map((day, index) => (
                    <TabContent key={day} day={day} isToday={day === today} data={data[index]}/>
                ))}
            </div>
        </div>
    )
}