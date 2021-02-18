import React, { FC } from 'react'
import { Styled } from './styled'
import { Typography } from '@material-ui/core'

type TCardProps = {
    label: string
    icon: JSX.Element
    gradient?: string
}

export const Button: FC<TCardProps> = ({ label, icon, gradient }) => {
    return (
        <Styled.WrapperButton>
            <Styled.WrapperIcon linearGradient={gradient}>{icon}</Styled.WrapperIcon>
            <Typography variant="button" color="initial">
                {label}
            </Typography>
        </Styled.WrapperButton>
    )
}
