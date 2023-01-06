import React from "react";
import {Helmet} from "react-helmet";

import { siteTitle } from "../../functions";

const HeadTag = ({title, desc}) => {
    return (
        <>
            <Helmet>
                <title>{title} - {siteTitle}</title>
                <meta name="title" content={`${title} - ${siteTitle}`}/>
                <meta name="description" content={`${desc} - ${siteTitle}`}/>
                <meta name="robots" content="index, follow"/>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
                <meta name="language" content="English"/>
                <meta name="revisit-after" content="1 days"/>
                <meta name="author" content="W"/>
            </Helmet>
        </>
    )
}

export default HeadTag;