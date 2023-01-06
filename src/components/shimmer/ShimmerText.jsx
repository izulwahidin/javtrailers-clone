import React from 'react';

const ShimmerText = () => {
    const random = () => {
        return Math.ceil((Math.floor(Math.random() * 60) + 41) / 10) * 10;
    }
    
    return (
        <>
            <div className="animate-pulse flex-wrap py-2 rounded">
                <div className={`bg-slate-300 mx-2 text-sm pb-2 max-w-full w-[${random()}%] h-[15px]`}></div>
            </div>
        </>
    )
}

export default ShimmerText;