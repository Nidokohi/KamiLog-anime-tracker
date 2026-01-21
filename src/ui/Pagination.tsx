

import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
import Link from "next/link";

type PaginationProps = {
    baseUrl: string;
    page: number;
    lastPage: number;
}

export default function Pagination({ baseUrl, page, lastPage }: PaginationProps) {

    const size = 12;

    const btnClass = "join-item btn";
    const disabledBtnClass = "join-item btn btn-disabled";

    const withPage = (p: number) =>
    `${baseUrl}${baseUrl.includes("?") ? "&" : "?"}page=${p}`;

    return (
        <div className="join self-center">
              
                <Link href={withPage(1)} scroll={false} className={page <= 2 ? disabledBtnClass : btnClass}>
                        <ChevronsLeft size={size} />
                </Link>
            
                <Link href={withPage(page - 1)} scroll={false} className={page === 1 ? disabledBtnClass : btnClass}>
                        <ChevronLeft size={size} />
                </Link>
            
                <label className="join-item btn btn-disabled bg-base-100 text-white">Page {page}</label>

                <Link href={withPage(page + 1)} scroll={false} className={page === lastPage ? disabledBtnClass : btnClass}>
                        <ChevronRight size={size} />  
                </Link>
            
                <Link href={withPage(lastPage)} scroll={false} className={page >= lastPage - 1 ? disabledBtnClass : btnClass}>
                        <ChevronsRight size={size} />
                </Link>
              
        </div>
    )
}