import React from 'react';

const ShimmerCard = () => {
    return (
        <>
            <div className="animate-pulse flex-wrap py-2 rounded hover:shadow-black hover:shadow-lg">
                <div className="bg-slate-300 w-full h-[175px] rounded"></div>
                <div className="bg-slate-300 mx-2 my-1 text-md font-bold h-4 w-[60%]"></div>
                <div className="bg-slate-300 mx-2 my-1 text-md font-bold h-4 w-[90%]"></div>
                <div className="bg-slate-300 mx-2 my-1 text-md font-bold h-4 w-[50%]"></div>
            </div>
        </>
    )
}

export default ShimmerCard;