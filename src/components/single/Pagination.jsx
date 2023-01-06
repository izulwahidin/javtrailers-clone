import React from 'react';

const Pagination = (obj) => {
    return (
        <>
            <a href={obj.goto} className="py-2 px-3 border-2 bg-sky-100 rounded hover:bg-sky-500 hover:text-white hover:font-bold">{obj.title}</a>
        </>
    )
}

export default Pagination;