
import { Header } from "@/ui";

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
