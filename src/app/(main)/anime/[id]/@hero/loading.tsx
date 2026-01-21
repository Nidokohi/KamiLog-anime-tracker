

export default function HeroLoading() {
    return (    
        <div className="card lg:card-side bg-base-300 px-10 pt-8 pb-6 gap-8 shadow-sm rounded-md items-center xl:items-start justify-items-start">
            <div className="flex flex-col gap-4 w-max h-max items-start">
                <div className="skeleton image-full w-48 h-64"></div>
                <div className="card-actions justify-start items-center gap-5 w-full">
                    <div className="skeleton btn btn-primary w-2/3 h-10"></div>
                </div>
            </div>
            <div className="card-body p-0 gap-5 items-center xl:items-start justify-items-start">
                <div className="card-title flex-col gap-1 items-center xl:items-start">
                    <div className="skeleton h-8 w-64 mb-2"></div>
                    <div className="skeleton h-6 w-48"></div>
                </div> 
                <div className="flex flex-col gap-2">
                    <div className="skeleton h-6 w-24"></div>
                    <div className="skeleton h-20 w-full" />
                </div>      
            </div>
        </div>
    )
}
