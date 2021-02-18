import React, { FC, useState } from 'react'
import { Styled } from './styled'

type TCardProps = {
    gradient?: string
}

export const CustomIcon: FC<TCardProps> = ({ gradient, children }) => {
    const [grd, setGradient] = useState(false)
    return (
        <Styled.WrapperIcon gradient={grd ? gradient : 'none'} onClick={() => setGradient(!grd)}>
            {children}
        </Styled.WrapperIcon>
    )
}
