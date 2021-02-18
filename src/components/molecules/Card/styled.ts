import styled from 'styled-components'
import { theme } from '@theme'

const WrapperCard = styled('div')`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: max-content;
    height: 100%;
    border-radius: ${theme.radius.x24}px;
    padding: ${theme.padding.x24}px ${theme.padding.x40}px;
    overflow: hidden;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`

const WrapperImage = styled.div`
    display: grid;
    grid-template-rows: max-content;
    background: white;
    width: 100%;
`
const imageCard = styled.img`
    width: 100%;
`
const WrapperDescription = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 30px;
    height: 150px;
`

export const Styled = {
    WrapperCard,
    WrapperDescription,
    WrapperImage,
    imageCard,
}
