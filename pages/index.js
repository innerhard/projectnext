import Head from 'next/head'
import React from 'react'
import Typography from '@material-ui/core/Typography'
import {LayoutPage} from "../src/components/organisms/LayoutPage"

export default function Home() {
    return (
        <LayoutPage>
            <Head>
                <title>index Page</title>
            </Head>
            <Typography variant="h3"> Main page</Typography>
        </LayoutPage>
    )
}
