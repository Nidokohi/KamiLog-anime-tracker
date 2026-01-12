

type AnimeLayoutProps = {
    episodes: React.ReactNode;
    extra_info: React.ReactNode;
    hero: React.ReactNode;
}

export default function AnimeLayout({
   episodes, extra_info, hero
}: AnimeLayoutProps) {

    return (
        <main className="flex flex-col items-center justify-items-center pb-5 w-screen h-[calc(100vh-64px)] overflow-auto">  
            <div className="my-8 w-5/6 h-max">
                {hero}
            </div>
            <div className="flex flex-row gap-10 items-start justify-items-start w-5/6 h-max">
                <div className="w-1/6 h-full">
                    {extra_info}
                </div>
                <div className="w-5/6 h-full">
                    {episodes}
                </div>
            </div>
        </main>
    )
}

