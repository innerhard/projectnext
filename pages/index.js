import Head from 'next/head'
import React from 'react'
import Typography from '@material-ui/core/Typography'
import { Navigation } from '../components/organisms/Navigation'

export default function Home() {
    const data = [
        { id: 1, href: '/', description: 'main page' },
        { id: 2, href: '/course', description: 'course page' },
    ]
    return (
        <>
            <Head>
                <title>index Page</title>
            </Head>
            <Navigation data={data} />
            <Typography variant="h3"> Main page</Typography>
        </>
    )
}
