import React, { FC } from 'react'
import { Typography } from '@material-ui/core'
import { useNotesStore } from '@store'
import { Styled } from './styled'

type TCardProps = {
    id: number
    linkImage: string
    alt: string
    title: string
    description: string
    price?: string
}

export const Card: FC<TCardProps> = ({ id, title, description, linkImage, alt, price }) => {
    const notesStore = useNotesStore()

    return (
        <Styled.WrapperCard key={id}>
            <Styled.WrapperCardTitle>
                <Typography variant="h5" color="primary">
                    {title}
                </Typography>
            </Styled.WrapperCardTitle>
            <Styled.WrapperImage>
                <Styled.imageCard src={linkImage} alt={alt} />
            </Styled.WrapperImage>
            <Styled.WrapperDescription>
                <Typography variant="body2" color="initial">
                    {description}
                </Typography>
            </Styled.WrapperDescription>
            <Styled.WrapperCardButton>
                <Styled.CardButton
                    onClick={() =>
                        price &&
                        notesStore?.addNotes(`${title}`, `${description}`, `${title}`, `${price}`, `${linkImage}`)
                    }
                >
                    {price ? `В корзину ${price} ₽` : 'Нет в наличии'}
                </Styled.CardButton>
            </Styled.WrapperCardButton>
        </Styled.WrapperCard>
    )
}
