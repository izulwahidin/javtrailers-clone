import React from "react";
import { useState, useEffect } from 'react';
import { getEndpoint, BASEAPI, getParams } from "../functions";

import TextSection from "../components/TextSection";
import PaginationSection from "../components/PaginationSection";
import ProfileSection from "../components/ProfileSection";
import HeadTag from "../components/single/HeadTag";

const Casts = () => {
    const [loaded, setLoaded] = useState(false)
    const [data, setData] = useState(false)

    // API Call
    useEffect(()=> {
        fetch(`${BASEAPI}?javtrailers=${btoa(getEndpoint())}`)
            .then(res => res.json())
            .then(json => {
                setData(json[0])
                setLoaded(true)
            })
    }, [])

    const totalPage = Math.ceil(data.count/300);
    return (
        <>
            {
                !loaded?(
                    <>
                        {
                            getParams('page') === 1?(
                                <>
                                    <ProfileSection title='Popular Casts' shimmer='10'/>
                                </>
                            ):null
                        }
                        <TextSection title='Casts List' shimmer='20'/>
                        <PaginationSection shimmer='5'/>
                    </>
                ):(
                    <>
                        <HeadTag title={data.currentPage <= 1 ? 'Casts' : `Cast Lists Page ${data.currentPage}`}/>
                        {
                            typeof data.popularCasts === 'object' ?(
                                <>
                                    <ProfileSection title='Popular Cast' data={data.popularCasts}/>
                                </>
                            ):null
                        }
                        <TextSection title='Casts List' data={data.casts}/>
                        <PaginationSection current={data.currentPage} max={totalPage}/>
                    </>
                )
            }
        </>
    )
}

export default Casts;