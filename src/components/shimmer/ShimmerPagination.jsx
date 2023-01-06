import React from 'react';

const ShimmerPagination = () => {
    return (
        <>
            <div className="animate-pulse flex justify-center gap-1 pb-5">
                <div className="py-4 px-5 border-2 bg-slate-300 rounded hover:bg-sky-500 hover:text-white hover:font-bold"></div>
            </div>
        </>
    )
}

export default ShimmerPagination;