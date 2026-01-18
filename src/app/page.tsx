import { FollowButton } from "@/ui";
import { InfoCard } from "@/components";
import { getAnimeInfo } from "@/lib/getAnimeInfo";


export default async function Home() {

  const sampleAnime = await getAnimeInfo(52991); 

  return (
    <>
      <main className="flex h-screen flex-col items-center justify-between">
        <h1 className="text-4xl font-bold mb-8">Welcome to</h1>
        <InfoCard anime={sampleAnime} />
      </main>
    </>    
  );
}
