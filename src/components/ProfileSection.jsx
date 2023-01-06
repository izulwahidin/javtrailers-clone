import React from 'react';
import Profile from './single/Profile';
import ShimmerProfile from './shimmer/ShimmerProfile'

const ProfileSection = ({title,data,max,shimmer}) => {
    const profiles = max ? data.slice(0,max) : data;
    return (
        <>
            <section>
                <div className="p-5 bg-sky-50">
                    <h2 className="text-2xl pb-5">{title}</h2>
                    <div className="grid gap-5 grid-cols-5 md:grid-cols-6 lg:grid-cols-10">
                        {
                            shimmer? (
                                Array.from(Array(parseInt(shimmer)).keys()).map( () => {
                                    return <ShimmerProfile />
                                })
                            ):(
                                [...profiles].map(e => {
                                    return <Profile data={e}/>
                                })
                            )
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProfileSection;