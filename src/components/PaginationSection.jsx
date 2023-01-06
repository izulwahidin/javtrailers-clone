import React from 'react';
import ShimmerPagination from './shimmer/ShimmerPagination';
import Pagination from './single/Pagination';

import { getNextPrevPage } from '../functions';

const PaginationSection = ({current, max, shimmer}) => {
    const np = getNextPrevPage(current,max);

    return (
        <>
        <section>
            <div className="flex bg-sky-50 justify-center gap-1 pb-5">
                {
                    shimmer? (
                        Array.from(Array(parseInt(shimmer)).keys()).map( () => {
                            return <ShimmerPagination />
                        })
                    ):(
                        <>
                            <Pagination title="Prev" goto={np.prev}/>
                            <Pagination title="Next" goto={np.next}/>
                        </>
                    )
                }
            </div>
        </section>
        </>
    )
}

export default PaginationSection;