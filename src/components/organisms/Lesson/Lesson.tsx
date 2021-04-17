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
        let filterData = data

        if (filterData && noteStore?.filter.cat & !noteStore?.filter.dog) {
            filterData = filterData.filter(item => {
                return item.cat === true
            })
        }

        if ( filterData && !noteStore?.filter.cat & noteStore?.filter.dog) {
            filterData = filterData.filter(item => {
                return item.dog === true
            })
        }

        const content = filterData?.map(({ id, description, productName, price, link, type }) => {

            if(!noteStore?.filter.feed &&
                !noteStore?.filter.clothes &&
                !noteStore?.filter.medications &&
                !noteStore?.filter.toys)
            { return <Styled.WrapperCard key={id}>
                <Card
                    id={id}
                    description={description}
                    title={productName}
                    price={price}
                    linkImage={link}
                    alt="Test"
                />
            </Styled.WrapperCard>
            }

            if(noteStore?.filter.[type] && !noteStore?.filter.cat && !noteStore?.filter.dog) {
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
            if(noteStore?.filter.[type] && (!noteStore?.filter.cat || !noteStore?.filter.dog)) {
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
        return <Styled.WrapperContainer>{filterData ? content : <CircularProgress />}</Styled.WrapperContainer>
    })
}
