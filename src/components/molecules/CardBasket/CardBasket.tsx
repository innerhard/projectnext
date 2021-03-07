import React, { FC } from 'react'
import { Styled } from './styled'
import { Typography } from '@material-ui/core'
import { useNotesStore } from '@store'
import CancelIcon from '@material-ui/icons/Cancel'

type TCardProps = {
    id: string
    linkImage: string
    alt: string
    title?: string
    description?: string
    price?: string
}

export const CardBasket: FC<TCardProps> = ({ id, title, description, linkImage, alt, price }) => {
    const notesStore = useNotesStore()

    return (
        <Styled.WrapperCard>
            <Styled.WrapperImage>
                <Styled.imageCard src={linkImage} alt={alt} />
            </Styled.WrapperImage>
            <Styled.WrapperDescription>
                <Typography variant="body1" color="primary">
                    {title}
                </Typography>
                <Typography variant="body2" color="primary">
                    {description}
                </Typography>
            </Styled.WrapperDescription>
            <Styled.WrapperDescription>
                <Typography variant="body2" color="primary">
                    {description}
                </Typography>
                <Typography variant="body2" color="primary">
                    {price}
                </Typography>
                <Styled.CloseIcon onClick={() => notesStore?.removeNote(id)} />
            </Styled.WrapperDescription>
        </Styled.WrapperCard>
    )
}
