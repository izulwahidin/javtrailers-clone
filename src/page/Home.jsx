import React from "react";
import { useState, useEffect } from 'react';
import { getEndpoint, BASEAPI, slug2string } from "../functions";

import { useParams } from 'react-router-dom';

import CardSection from "../components/CardSection";
import PaginationSection from "../components/PaginationSection";
import ProfileSection from "../components/ProfileSection";
import HeadTag from "../components/single/HeadTag";

const Home = () => {
    const [loaded, setLoaded] = useState(false)
    const [data, setData] = useState(false)

    const { slug } = useParams();
    // const current_endpoint = getEndpoint();

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

    // console.log(data);
    return (
        <>
            {
                !loaded?(
                    <>
                        {
                            !getEndpoint().match(/^\/(?:videos|casts|studios)/)?(
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
                        {
                            data.hotVideos && typeof data.hotVideos === 'object' ? (
                                <>
                                    <CardSection title='Popular Today' data={data.hotVideos}/>
                                    <ProfileSection title='Popular Cast' data={data.popularCasts} max={10}/>
                                </>
                            ): null
                        }
                        <CardSection title={!slug ? 'Recent Videos' : `${slug2string(slug)} Videos`} data={data.videos}/>
                        <PaginationSection current={data.currentPage} max={totalPage}/>
                        {
                            slug?(
                                <HeadTag title={data.currentPage <= 1 ? `${slug2string(slug)} Videos` : `${slug2string(slug)} Videos - Page ${data.currentPage}`}/>
                            ):(
                                <HeadTag title={data.currentPage <= 1 ? 'Watch JAV Free' : `Recent Videos - Page ${data.currentPage}`}/>
                            )
                        }
                    </>
                )
            }
        </>
    )
}

export default Home;