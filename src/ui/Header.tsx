
import { ThemeToggle } from "@/ui";

export default function Header() {

    return (
        <div className="navbar bg-base-200 shadow-sm sticky top-0 z-50 px-20 w-screen">
            <div className="flex-1">
                <a className="btn btn-ghost text-3xl font-(--font-zen-kaku) tracking-[0.06em]">Stash</a>
            </div>
            <div className="flex w-max gap-8 justify-items-center">
                <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                <ThemeToggle />
                <div className="w-10 rounded-full bg-gray-600">
                    
                </div>
            </div>
        </div>
    );
}
