import React from 'react';
import { image2cdn, releaseDate } from '../../functions'
import { LazyLoadImage } from "react-lazy-load-image-component";

const Card = (obj) => {

    return (
        <>
            <a href={`/video/${obj.data.contentId}`}>
            <div className="flex-wrap py-2 rounded hover:shadow-black hover:shadow-lg">
                <LazyLoadImage src={image2cdn(obj.data.image)} alt={obj.data.title} className="object-cover w-full rounded h-[200px] md:h-[150px] lg:h-[100px] "/>
                <h3 className="mx-2 text-md font-bold">{obj.data.dvdId}</h3>
                <h4 className="mx-2 text-md truncate">{obj.data.title}</h4>
                <p className="mx-2 text-sm pb-2">{releaseDate(obj.data.releaseDate)}</p>
            </div>
            </a>
        </>
    )
}

export default Card;