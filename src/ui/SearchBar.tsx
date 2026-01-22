
'use client'

import { useRouter } from "next/navigation"
import { useState } from "react";


export default function SearchBar({ size, value }: { size?: "sm" | "md" | "lg", value?: string }) {

    const router = useRouter();

    const [query, setQuery] = useState(value ?? "");
    
    const handleSearch = () => {
        router.replace(`/search?q=${encodeURIComponent(query)}`);
    }

    return (
        <label className={`input input-${size ?? "lg"} w-full bg-base-300 text-white `}>
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
                >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
                </g>
            </svg>
            <input type="search" className="grow" placeholder="Search" value={query} onChange={e => setQuery(e.target.value)} onKeyDown={e => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    handleSearch();
                }
            }} />
        </label>
    )
}