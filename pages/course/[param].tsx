import React, { FC, useEffect, useState } from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import { LayoutPage } from '@components'
import { queryStaticData } from '../../src/api'

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await queryStaticData(`http://localhost:1337/products`)
    const paths = res?.map(items => {
        return {
            params: {
                param: `${items.id}`,
            },
        }
    })

    return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ctx => {
    const { params } = ctx

    return {
        props: {
            param: params?.param,
        },
    }
}

const Post = ({ param }) => {
    return (
        <LayoutPage>
            <div>{param}</div>
        </LayoutPage>
    )
}

export default Post
