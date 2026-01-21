
import { Header } from "@/ui";

export default function NotFound() {
    return (    
        <main className="flex flex-col h-screen">   
            <Header />
            <div className="stats shadow w-full h-full items-center justify-center flex">
                <div className="stat flex flex-col items-center justify-center gap-2">
                    <div className="stat-value text-red-800 text-5xl font-bold">404 - Page not Found</div>
                    <div className="stat-desc text-base text-center">Sorry, the page you are looking for does not exist.</div>
                </div>
            </div>
        </main>
    )
}   
