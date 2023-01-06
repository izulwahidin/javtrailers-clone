import React from 'react';

const Header = () => {
    return (
        <>
            <header className="flex flex-wrap bg-sky-500 text-white py-5 px-5 md:flex-nowrap md:justify-evenly md:gap-3 md:items-center">
                    <img src="./logo.png" alt="logo" className="flex mx-[auto] max-h-10 pb-2 sm:pb-0"/>
                    <div className="flex gap-7 justify-center mx-[auto] mt-3 order-last md:order-none md:mt-0">
                        <a href="/" className="font-normal hover:font-bold">Home</a>
                        <a href="/categories" className="font-normal hover:font-bold">Categories</a>
                        <a href="/casts" className="font-normal hover:font-bold">Cast</a>
                        <a href="/studios" className="font-normal hover:font-bold">Studios</a>
                    </div>
                    <input type="text" placeholder="Search..." className="flex w-full text-black border-solid border-1 rounded bg-sky-100 px-2 md:max-w-[25%]"/>
            </header>
        </>
    )
}

export default Header;