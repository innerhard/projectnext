import React, { FC, useEffect, useState } from 'react'
import { queryAPI } from '../src/api'
import { LayoutPage } from '../src/components/organisms/'
import { CarouselBlock } from '../src/components/molecules/Carousel'

const dataCarousel = [
    {
        id: 1,
        title: 'test1',
        description: 'More description',
        link:
            'data:image/jpeg;base64,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',
        alt: 'more photo',
        price: '323123',
    },
    {
        id: 2,
        title: 'test2',
        description: 'More description',
        link: '#',
        alt: 'more photo',
        price: '12345',
    },
    {
        id: 2,
        title: 'test2',
        description: 'More description',
        link: '#',
        alt: 'more photo',
        price: '12345',
    },
    {
        id: 2,
        title: 'test2',
        description: 'More description',
        link: '#',
        alt: 'more photo',
        price: '12345',
    },
    {
        id: 2,
        title: 'test2',
        description: 'More description',
        link: '#',
        alt: 'more photo',
        price: '12345',
    },
    {
        id: 2,
        title: 'test2',
        description: 'More description',
        link: '#',
        alt: 'more photo',
        price: '12345',
    },
    {
        id: 2,
        title: 'test2',
        description: 'More description',
        link: '#',
        alt: 'more photo',
        price: '12345',
    },
    {
        id: 2,
        title: 'test2',
        description: 'More description',
        link: '#',
        alt: 'more photo',
        price: '12345',
    },
    {
        id: 2,
        title: 'test2',
        description: 'More description',
        link: '#',
        alt: 'more photo',
        price: '12345',
    },
    {
        id: 2,
        title: 'test2',
        description: 'More description',
        link: '#',
        alt: 'more photo',
        price: '12345',
    },
    {
        id: 2,
        title: 'test2',
        description: 'More description',
        link: '#',
        alt: 'more photo',
        price: '12345',
    },
]
const Course: FC = () => {
    const [data, setData] = useState<null>(null)
    const [hasError, setError] = useState<boolean>(false)

    useEffect(() => {
        queryAPI('http://localhost:1337/menus', setData, setError)
    }, [])

    if (hasError) {
        return <div>ERROR</div>
    }
    return (
        <LayoutPage json={data}>
            <CarouselBlock data={dataCarousel} />
        </LayoutPage>
    )
}

export default Course
