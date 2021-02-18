import React, { FC } from 'react'
import { Styled } from './styled'
import { Button, Typography } from '@material-ui/core'

type TCardProps = {
    link: string
    description?: string
}

export const SpecialOffer: FC<TCardProps> = ({ description, link }) => {
    return (
        <Styled.WrapperCard>
            <Typography variant="h5" color="initial">
                {description}
            </Typography>
            <Button variant="outlined" href={link}>
                Перейти
            </Button>
        </Styled.WrapperCard>
    )
}
