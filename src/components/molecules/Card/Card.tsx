import React, { FC } from 'react'
import { Styled } from './styled'
import { Typography } from '@material-ui/core'

type TCardProps = {
    linkImage: string
    alt: string
}

export const Card: FC<TCardProps> = ({ linkImage, alt }) => {
    return (
        <Styled.WrapperCard>
            <Typography variant="h5" color="initial">
                CSS Gradient is a happy little website and free tool that lets you create a gradient background for
                websites.
            </Typography>
            <Styled.imageCard src={linkImage} alt={alt} width={300} height={300} />
        </Styled.WrapperCard>
    )
}
