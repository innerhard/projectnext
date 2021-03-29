import React, { useEffect, useState } from 'react'
import { queryAPI } from '@api'
import { Styled } from './styled'
import { Card } from '@components'
import CircularProgress from '@material-ui/core/CircularProgress'
import { useNotesStore } from '@store'
import { useObserver } from 'mobx-react'

export function Lesson() {
    const [data, setData] = useState<null>(null)
    const [hasError, setError] = useState<boolean>(false)

    const noteStore = useNotesStore()

    useEffect(() => {
        queryAPI('http://localhost:1337/products', setData, setError)
    }, [])

    return useObserver(() => {
        const content = data?.map(({ id, description, productName, price, link, cat, dog, type }) => {
            if (
                (noteStore?.filter.cat && noteStore?.filter.cat === cat) ||
                noteStore?.filter.dog === dog ||
                (noteStore?.filter.feed && type === 'feed') ||
                (noteStore?.filter.clothes && type === 'clothes') ||
                (noteStore?.filter.toys && type === 'toys') ||
                (noteStore?.filter.medications && type === 'medications')
            ) {
                return (
                    <Styled.WrapperCard key={id}>
                        <Card
                            id={id}
                            description={description}
                            title={productName}
                            price={price}
                            linkImage={link}
                            alt="Test"
                        />
                    </Styled.WrapperCard>
                )
            }

            if (
                !noteStore?.filter.cat &&
                !noteStore?.filter.dog &&
                !noteStore?.filter.feed &&
                !noteStore?.filter.clothes &&
                !noteStore?.filter.toys &&
                !noteStore?.filter.medications
            ) {
                return (
                    <Styled.WrapperCard key={id}>
                        <Card
                            id={id}
                            description={description}
                            title={productName}
                            price={price}
                            linkImage={link}
                            alt="Test"
                        />
                    </Styled.WrapperCard>
                )
            }
        })
        return <Styled.WrapperContainer>{data ? content : <CircularProgress />}</Styled.WrapperContainer>
    })
}
