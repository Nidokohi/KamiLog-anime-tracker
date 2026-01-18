

type HomeLayoutProps = {
    top_airing: React.ReactNode;
    season_anime: React.ReactNode;
    top_anime: React.ReactNode;
    schedules: React.ReactNode;
}   

export default function HomeLayout({
    top_airing,
    season_anime,
    top_anime,
    schedules
}: HomeLayoutProps) {
    return (
        <main className="flex flex-col items-center justify-items-center pb-5 w-screen overflow-auto">  
            <div className="w-full h-max">
                {top_airing}
            </div>
            <div className="w-full h-max">
                {season_anime}
            </div>
            <div className="w-full h-max flex flex-row py-5 px-6 gap-5">   
                <div className="w-4/5 h-full">
                    {schedules}
                </div>
                <div className="w-1/5 h-full">
                    {top_anime}
                </div>
            </div>
        </main> 
    )
}