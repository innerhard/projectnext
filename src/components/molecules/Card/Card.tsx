import React, { FC } from 'react'
import { Typography } from '@material-ui/core'
import { useNotesStore } from '@store'
import { Styled } from './styled'
import { Observer } from 'mobx-react'
import Link from 'next/link'

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
        <Observer>
            {() => (
                <Styled.WrapperCard key={id}>
                    <Styled.WrapperCardTitle>
                        <Styled.CardTitle>{title}</Styled.CardTitle>
                    </Styled.WrapperCardTitle>
                    <Link passHref href={`/course/${id}`}>
                        <Styled.WrapperImage>
                            <Styled.imageCard src={linkImage} alt={alt} />
                        </Styled.WrapperImage>
                    </Link>
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
                                    `${title}`,
                                    `${description}`,
                                    `${title}`,
                                    `${price}`,
                                    1,
                                    `${linkImage}`,
                                    `${id}`,
                                )
                            }
                        >
                            {price ? `В корзину ${price} ₽` : 'Нет в наличии'}
                        </Styled.CardButton>
                    </Styled.WrapperCardButton>
                </Styled.WrapperCard>
            )}
        </Observer>
    )
}
