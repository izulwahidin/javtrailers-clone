import React from 'react';
import Card from './single/Card';
import ShimmerCard from './shimmer/ShimmerCard';

const CardSection = (obj) => {



    return (
        <>
            <section>
                <div className="p-5 bg-sky-50">
                    <h2 className="text-2xl">{obj.title}</h2>
                    <div className="grid gap-5 grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
                        {
                            obj.shimmer? (
                                Array.from(Array(parseInt(obj.shimmer)).keys()).map( () => {
                                    return <ShimmerCard />
                                })
                            ):(
                                [...obj.data].map(e => {
                                    return <Card data={e}/>
                                })
                            )
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default CardSection;