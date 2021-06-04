import React, { useEffect, useState } from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import { LayoutPage, ProductInfo } from '@components'
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
    const [data, setData] = useState(null)
    const [hasError, setError] = useState<boolean>(false)

    useEffect(() => {
        queryStaticData(`http://localhost:1337/products?id=${param}`).then(response => setData(response))
    }, [param])

    return <LayoutPage>{data && <ProductInfo {...data[0]} />}</LayoutPage>
}

export default Post
