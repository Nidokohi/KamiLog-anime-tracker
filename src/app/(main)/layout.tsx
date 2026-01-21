
import { Header } from "@/ui";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Search - KamiLog",
};

export default function MainLayout({
  children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-col w-screen h-screen">
            <Header />
            {children}
        </div>
    )
}
