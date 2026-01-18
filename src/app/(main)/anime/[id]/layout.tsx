

type AnimeLayoutProps = {
    episodes: React.ReactNode;
    extra_info: React.ReactNode;
    hero: React.ReactNode;
}

export default function AnimeLayout({
   episodes, extra_info, hero
}: AnimeLayoutProps) {

    return (
        <main className="flex flex-col items-center justify-items-center pb-5 w-screen overflow-auto">  
            <div className="my-8 w-5/6 h-max">
                {hero}
            </div>
            <div className="flex flex-row items-start gap-2 justify-items-start w-5/6">
                <div className="w-1/5 h-full">
                    {extra_info}
                </div>
                <div className="w-4/5 h-full">
                    {episodes}
                </div>
            </div>
        </main>
    )
}

