
import { SearchBar } from "@/ui";
import { Children } from "react";

type SearchLayoutProps = {
    search_results: React.ReactNode;
    top_anime: React.ReactNode;
}

export default function SearchLayout({
    search_results,
    top_anime
}: SearchLayoutProps) {
    return (
        <main className="flex flex-col items-center justify-items-start pb-5 gap-5 w-screen overflow-auto">  
            <div className="w-2/3 m-5 mt-10">
                <SearchBar />
            </div>
            <div className="w-full h-max flex flex-row py-4 px-5 gap-5">
                <div className="w-4/5">
                    {search_results}
                </div>
                <div className="w-1/5">
                    {top_anime}
                </div>
            </div>
        </main>
    )

}
