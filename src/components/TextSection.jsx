import React from 'react';
import Text from './single/Text';
import ShimmerText from './shimmer/ShimmerText'

const ProfileSection = ({title, data, shimmer}) => {
    return (
        <>
            <section>
                <div className="p-5 bg-sky-50">
                    <h2 className="text-2xl pb-5">{title}</h2>
                    <div className="grid gap-5 grid-cols-2 md:grid-cols-4">
                        {
                            shimmer? (
                                Array.from(Array(parseInt(shimmer)).keys()).map( () => {
                                    return <ShimmerText/>;
                                })
                            ):(
                                [...data].map(e =>{
                                    return <Text link={e.slug} value={e.name}/>
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