import React, { FC } from 'react'
import { Styled } from './styled'
import { Typography, Button } from '@material-ui/core'
import { useNotesStore } from '@store'

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
                <Button
                    onClick={() =>
                        notesStore.addNotes(`${title}`, `${description}`, `${title}`, `${price}`, `${linkImage}`)
                    }
                >
                    {price ? price + ' ₽' : 'Нет в наличии'}
                </Button>
            </Styled.WrapperDescription>
        </Styled.WrapperCard>
    )
}
