import React from "react";
import { useState, useEffect } from 'react';
import { getEndpoint, BASEAPI } from "../functions";

import TextSection from "../components/TextSection";
import PaginationSection from "../components/PaginationSection";

const Studios = () => {
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
                        <TextSection title='Loading...' shimmer='12'/>
                        <PaginationSection shimmer='5'/>
                    </>
                ):(
                    <>
                        <TextSection title='Studios List' data={data.studios}/>
                        <PaginationSection current={data.currentPage} max={totalPage}/>
                    </>
                )
            }
        </>
    )
}

export default Studios;