import React from "react";
import { useState, useEffect } from 'react';
import { getEndpoint, BASEAPI } from "../functions";

import CardSection from "../components/CardSection";
import PaginationSection from "../components/PaginationSection";
import ProfileSection from "../components/ProfileSection";
import HeadTag from "../components/single/HeadTag";

const Home = () => {
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

    const totalPage = Math.ceil(data.count/24);
    return (
        <>
            {
                !loaded?(
                    <>
                        <HeadTag title="Loading"/>
                        {
                            !getEndpoint().includes('/videos')?(
                                <>
                                    <CardSection title='Popular Today' shimmer='6'/>
                                    <ProfileSection title='Popular Cast' shimmer='10'/>
                                </>
                            ):null
                        }
                        <CardSection title='Recent Videos' shimmer='12'/>
                        <PaginationSection shimmer='5'/>
                    </>
                ):(
                    <>
                        <HeadTag title={data.currentPage <= 1 ? 'njir' : 'blok'}/>
                        {
                            data.hotVideos ? (
                                <>
                                    <CardSection title='Popular Today' data={data.hotVideos}/>
                                    <ProfileSection title='Popular Cast' data={data.popularCasts} max={10}/>
                                </>
                            ): null
                        }
                        <CardSection title='Recent Videos' data={data.videos}/>
                        <PaginationSection current={data.currentPage} max={totalPage}/>
                    </>
                )
            }
        </>
    )
}

export default Home;