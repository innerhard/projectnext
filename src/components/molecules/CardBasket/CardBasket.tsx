import React, { FC, useState } from 'react'
import { Styled } from './styled'
import { Typography } from '@material-ui/core'
import { useNotesStore } from '@store'
import { Transition } from 'react-transition-group'

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
    const [visible, setVisible] = useState(true)
    const transitionStyles = {
        entering: { opacity: 1 },
        entered: { opacity: 1 },
        exiting: { opacity: 0, transition: 'opacity 0.3s' },
        exited: { opacity: 0, transition: 'opacity 0.3s' },
    }
    return (
        <Transition in={visible} timeout={300}>
            {classBlock => (
                <Styled.WrapperCard style={transitionStyles[classBlock]}>
                    <Styled.WrapperTitle>
                        <Typography variant="h6" color="primary">
                            {title}
                        </Typography>
                    </Styled.WrapperTitle>
                    <Styled.WrapperImage>
                        <Styled.imageCard src={linkImage} alt={alt} />
                    </Styled.WrapperImage>
                    <Typography variant="body2" color="primary">
                        {description}
                    </Typography>
                    <Typography variant="h6">
                        {price} ₽
                    </Typography>
                    <Styled.CloseIcon
                        onClick={() => {
                            setVisible(false)
                            setTimeout(() => notesStore?.removeNote(id), 500)
                        }}
                    />
                </Styled.WrapperCard>
            )}
        </Transition>
    )
}
