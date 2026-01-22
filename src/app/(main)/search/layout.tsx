

import { SearchBar } from "@/ui";

export const dynamic = 'force-dynamic'

export default function SearchLayout({
    search_results,
}: { search_results: React.ReactNode }) {

    return (
        <main className="flex flex-col items-center justify-items-center pb-5 gap-5 w-screen overflow-auto">  
            <div className="w-2/3 m-5 mt-10">
                <SearchBar/>
            </div>
            <div className="w-full h-max flex flex-row py-4 px-5 gap-5 items-center justify-center">
                <div className="w-4/5 self-center justify-center">
                   {search_results}
                </div>
            </div>
        </main>
    )
}
