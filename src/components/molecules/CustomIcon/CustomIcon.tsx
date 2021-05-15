import React, { FC, useEffect, useState } from 'react'
import { Typography } from '@material-ui/core'
import { Styled } from './styled'

type TCardProps = {
    gradient: string
    isActive?: boolean
    handler: (arg: boolean, type: 'feed' | 'toys' | 'clothes' | 'medications' | 'cat' | 'dog') => {}
    name: string
    type: 'feed' | 'toys' | 'clothes' | 'medications' | 'cat' | 'dog'
    text?: string
}

export const CustomIcon: FC<TCardProps> = ({ gradient, name, type, isActive = false, handler, text, children }) => {
    const [grd, setGradient] = useState(isActive)

    useEffect(() => {
        window.localStorage.setItem(name, `${grd}`)
    }, [grd])

    return (
        <Styled.WrapperContent
            onClick={() => {
                setGradient(!grd)
                handler(isActive, type)
            }}
        >
            <Styled.WrapperIcon gradient={grd ? gradient : 'none'}>{children}</Styled.WrapperIcon>
            {text && <Typography>{text}</Typography>}
        </Styled.WrapperContent>
    )
}
