import React, { FC, useEffect, useState } from 'react'
import { Styled } from './styled'

type TCardProps = {
    gradient: string
    isActive?: boolean
    handler: (arg: boolean, type: 'feed' | 'toys' | 'clothes' | 'medications' | 'cat' | 'dog') => {}
    name: string
    type: 'feed' | 'toys' | 'clothes' | 'medications' | 'cat' | 'dog'
}

export const CustomIcon: FC<TCardProps> = ({ gradient, name, type, isActive = false, handler, children }) => {
    const [grd, setGradient] = useState(isActive)

    useEffect(() => {
        window.localStorage.setItem(name, `${grd}`)
    }, [grd])

    return (
        <Styled.WrapperIcon
            gradient={grd ? gradient : 'none'}
            onClick={() => {
                setGradient(!grd)
                handler(isActive, type)
            }}
        >
            {children}
        </Styled.WrapperIcon>
    )
}
