import React, { FC, useEffect, useState } from 'react'
import { Navigation, DrawerMenu } from '@components'
import { Styled } from './styled'
import { queryAPI } from '@api'

export const LayoutPage: FC = ({ children }) => {
    const [count, setCount] = useState(0)
    const [data, setData] = useState<null>(null)
    const [hasError, setError] = useState<boolean>(false)

    useEffect(() => {
        queryAPI('http://localhost:1337/menus', setData, setError)
    }, [])

    if (hasError) {
        return <div>ERROR</div>
    }

    return (
        <>
            <Styled.PageWrapper>
                <Styled.DrawerMenuWrapper>
                    <DrawerMenu />
                </Styled.DrawerMenuWrapper>
                {<Navigation data={data} backet={count} handlerBacket={setCount} />}
                <Styled.WrapperContent>{children}</Styled.WrapperContent>
            </Styled.PageWrapper>
        </>
    )
}
