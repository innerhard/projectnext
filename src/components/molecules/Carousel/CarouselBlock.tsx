import React, { FC } from 'react'
import { Styled } from './styled'
import { Typography } from '@material-ui/core'
import Flicking from '@egjs/react-flicking'

type TCarouselProp = {
    data: { id: number; title: string; description: string; link: string; alt: string; price: string }[]
}
export const CarouselBlock: FC<TCarouselProp> = ({ data }) => {
    return (
        <Styled.Wrapper>
            <Flicking infinite={true} gap={16} infiniteThreshold={50} defaultIndex={3}>
                {data.map(({ title, alt, description, link, id, price }) => {
                    return (
                        <Styled.WrapperCard key={id}>
                            <Typography variant="h4" color="initial">
                                {title}
                            </Typography>
                            <Styled.imageCard src={link} alt={alt} width={300} height={300} />
                            <Typography variant="h5" color="initial">
                                {description}
                            </Typography>
                            <Typography variant="h5" color="initial">
                                {price}
                            </Typography>
                        </Styled.WrapperCard>
                    )
                })}
            </Flicking>
        </Styled.Wrapper>
    )
}
