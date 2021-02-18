import React, { FC } from 'react'
import { Styled } from './styled'
import { Typography, Button } from '@material-ui/core'

type TCardProps = {
    linkImage: string
    alt: string
    title?: string
    description?: string
    price?: string
}

export const Card: FC<TCardProps> = ({ title, description, linkImage, alt, price }) => {
    return (
        <Styled.WrapperCard>
            <Typography variant="h5" color="primary">
                {title}
            </Typography>
            <Styled.WrapperImage>
                <Styled.imageCard src={linkImage} alt={alt} />
            </Styled.WrapperImage>
            <Styled.WrapperDescription>
                <Typography variant="body2" color="initial">
                    {description}
                </Typography>
                <Button>{price ? price + ' ₽' : 'Нет в наличии'}</Button>
            </Styled.WrapperDescription>
        </Styled.WrapperCard>
    )
}
