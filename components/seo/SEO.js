import React from 'react'
import Head from 'next/head'

const SEO = (props) => {
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Zero | {props.pageTitle}</title>
        </Head>
    )
}

export default SEO
