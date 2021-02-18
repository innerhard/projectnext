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
    const content = data?.map(({ id, Description, Product_Name, Price }) => {
        return (
            <Styled.WrapperCard key={id}>
                <Card
                    description={Description}
                    title={Product_Name}
                    price={Price}
                    linkImage={'https://upload.wikimedia.org/wikipedia/commons/9/9d/Tomato.png'}
                    alt="Test"
                />
            </Styled.WrapperCard>
        )
    })
    return <Styled.WrapperContainer>{data ? content : <CircularProgress />}</Styled.WrapperContainer>
}
