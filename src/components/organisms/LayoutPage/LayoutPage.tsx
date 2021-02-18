import React, { FC, useState } from 'react'
import { Navigation, DrawerMenu } from '@components'
import { Styled } from './styled'

type TLayoutPage = {
    json?: any
}
export const LayoutPage: FC<TLayoutPage> = ({ json, children }) => {
    const [count, setCount] = useState(0)

    return (
        <>
            <Styled.PageWrapper>
                <Styled.DrawerMenuWrapper>
                    <DrawerMenu />
                </Styled.DrawerMenuWrapper>
                <Navigation data={json} backet={count} handlerBacket={setCount} />
                <Styled.WrapperContent>{children}</Styled.WrapperContent>
            </Styled.PageWrapper>
        </>
    )
}
