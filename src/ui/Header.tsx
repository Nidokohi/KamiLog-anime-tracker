
'use client'

import { UserRound } from "lucide-react";
import { ThemeToggle, SearchBar } from "@/ui";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Header() {

    const router = useRouter();

    const redirectHome = () => {
        router.push("/home");
    }

    return (
        <div className="navbar bg-sky-950 shadow-sm sticky top-0 z-50 px-20 w-full shadow-base-content/20 items-center">
            <div className="flex flex-1 hover:cursor-pointer flex-row gap-5" onClick={redirectHome}>
                <div className="rounded-full w-max">
                    <Image src="/images/logo.png" className="rounded-full" alt="KamiLog Logo" width={45} height={45} />
                </div>
                <a className="text-3xl text-white font-(--font-zen-kaku) font-bont tracking-[0.06em]" >KamiLog</a>
            </div>
            <div className="flex w-max gap-8 justify-items-center">
                <SearchBar size={"sm"} />
                {/* <ThemeToggle /> */}
                <div className="w-14 rounded-full bg-gray-600 items-center justify-items-center p-1 hover:cursor-pointer"> 
                    <UserRound size={30} className="text-white"/>
                </div>
            </div>
        </div>
    );
}
