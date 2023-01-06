import React from "react";
import { useState, useEffect } from 'react';
import { getEndpoint, BASEAPI } from "../functions";
// import { getParams } from "../functions";

import TextSection from "../components/TextSection";
import HeadTag from "../components/single/HeadTag";

const Categories = () => {
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

    
    return (
        <>

            <section className="py-5 bg-sky-50 text-black">
                <div className="flex justify-center">
                    <h1 className="text-5xl">Categories</h1>
                </div>
            </section>

            {
                !loaded?(
                    <>
                        <TextSection title='Loading...' shimmer='12'/>
                    </>
                ):(
                    <>
                        <HeadTag title="Category List"/>
                        {
                            [...data.categories].map(e => {
                                return <TextSection title={e.group.name} data={e.links}/>
                            })
                        }
                    </>
                )
            }
        </>
    )
}

export default Categories;