import React from 'react';

const ShimmerProfile = () => {
    return (
        <>
            <div className="animate-pulse flex-wrap p-2 basis-1/5 rounded hover:shadow-black hover:shadow-lg md:basis-1/6">
                <div className="bg-slate-300 rounded-full w-[50px] h-[50px] mx-[auto]"></div>
                <div className="bg-slate-300 my-1 text-md font-bold h-4 w-full"></div>
            </div>
        </>
    )
}

export default ShimmerProfile;