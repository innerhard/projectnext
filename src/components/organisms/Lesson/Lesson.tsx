import React, { useEffect, useState } from 'react'
import { queryAPI } from '@api'
import { Styled } from './styled'
import { Card } from '@components'
import CircularProgress from '@material-ui/core/CircularProgress'

export function Lesson() {
    const [data, setData] = useState<null>(null)
    const [hasError, setError] = useState<boolean>(false)

    useEffect(() => {
        queryAPI('http://localhost:1337/products', setData, setError)
    }, [])
    const content = data?.map(({ id, description, productName, price, link }) => {
        return (
            <Styled.WrapperCard key={id}>
                <Card id={id} description={description} title={productName} price={price} linkImage={link} alt="Test" />
            </Styled.WrapperCard>
        )
    })
    return <Styled.WrapperContainer>{data ? content : <CircularProgress />}</Styled.WrapperContainer>
}
