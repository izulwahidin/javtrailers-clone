import React from 'react';
import { image2cdn } from '../../functions'
import { LazyLoadImage } from "react-lazy-load-image-component";

const Profile = (obj) => {
    return (
        <>
            <a href={`/casts/${obj.data.slug}`}>
                <div className="flex-wrap p-2 basis-1/5 rounded md:basis-1/6">
                    <LazyLoadImage src={image2cdn(obj.data.avatar)} alt={obj.data.slug} className="rounded-full mx-[auto]"/>
                    <h4 className="text-sm text-center truncate">{obj.data.name}</h4>
                </div>
            </a>
        </>
    )
}

export default Profile;