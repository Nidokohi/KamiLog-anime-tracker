
import { Anime } from "@/types/animeTypes";

export function removeDupes(data: Anime[]) {

    const uniqueMap = new Map<number, Anime>();

    for (const anime of data as Anime[]) {
        const existing = uniqueMap.get(anime.mal_id);

        if (!existing || (anime.members ?? 0) > (existing.members ?? 0)) {
            uniqueMap.set(anime.mal_id, anime);
        }
    }

    return Array.from(uniqueMap.values()) as Anime[];
}