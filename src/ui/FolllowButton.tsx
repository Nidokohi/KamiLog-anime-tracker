'use client'

import { Heart } from "lucide-react";
import { useMemo, useState } from "react";

export default function FollowButton({ animeId }: { animeId?: string | number }) {

    const [isFollowed, setIsFollowed] = useState(false);
    
    // const color = useMemo(() => {
    //     return isFollowed ? "bg-red-500" : "bg-gray-500";
    // }, [isFollowed]);

    const color = isFollowed ? "bg-red-500" : "bg-gray-500";
    const colorHover = isFollowed ? "hover:bg-red-600" : "hover:bg-gray-600";

    const onClick = () => { 
        setIsFollowed(!isFollowed);
    }

    return (
        <div onClick={onClick} className={`size-8 p-1 items-center justify-items-center ${color} ${colorHover} rounded-sm`} >
            <Heart size={24} fill="white" color="white" />
        </div>
    )
}