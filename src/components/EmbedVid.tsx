

type EmbedVidProps = {
    title: string;
    url: string;
}

export default function EmbedVid({ title, url }: EmbedVidProps) {

    return (
        <div className="flex flex-col gap-4 w-full p-2">
                {
                    title && <span className="font-bold tracking-wide text-3xl">{title}</span>
                }
                <iframe
                    loading="lazy"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                    className="rounded-md shadow-sm aspect-video"
                    src={url}
                >
            </iframe>    
        </div>
    )
}