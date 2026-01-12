import { Heart } from "lucide-react";
import { useMemo } from "react";

export default function FollowButton({ isFollowed }: { isFollowed: boolean }) {
    
    const color = useMemo(() => {
        return isFollowed ? "bg-red-500" : "bg-gray-500";
    }, [isFollowed]);

    return (
        <div className={`size-7 p-1 items-center justify-items-center  ${color} rounded-sm`}>
            <Heart size={18} fill="white" color="white" />
        </div>
    )
}