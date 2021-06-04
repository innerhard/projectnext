import React, { FC } from 'react'
import { Typography } from '@material-ui/core'
import { useNotesStore } from '@store'
import { Styled } from './styled'

type TCardProps = {
    id: number
    link: string
    alt: string
    productName: string
    description: string
    price?: string
}

export const ProductInfo: FC<TCardProps> = ({ id, productName, description, link, alt, price }) => {
    const notesStore = useNotesStore()

    return (
        <Styled.WrapperCard key={id}>
            <Styled.WrapperCardTitle>
                <Typography variant="h5" color="primary">
                    {productName}
                </Typography>
            </Styled.WrapperCardTitle>
            <Styled.WrapperImage>
                <Styled.imageCard src={link} alt={alt} />
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
                        notesStore?.addNotes(
                            `${productName}`,
                            `${description}`,
                            `${productName}`,
                            `${price}`,
                            1,
                            `${link}`,
                            `${id}`,
                        )
                    }
                >
                    {price ? `В корзину ${price} ₽` : 'Нет в наличии'}
                </Styled.CardButton>
            </Styled.WrapperCardButton>
        </Styled.WrapperCard>
    )
}
