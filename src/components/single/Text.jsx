import React from 'react';
import { currentURL } from '../../functions';

const Text = ({value, link}) => {
    const text = value.length <=1 ? link.replace('-',' ') : value
    const href = `${currentURL.pathname}/${link}`;
    
    return (
        <>
            <a href={href}>
                <div className="flex-wrap rounded">
                    <p className="text-sm truncate hover:underline">{text}</p>
                </div>
            </a>
        </>
    )
}

export default Text;