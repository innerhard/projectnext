import styled from 'styled-components'
import { theme } from '@theme'
import { Button } from '@material-ui/core'

const WrapperCard = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: max-content;
    height: 100%;
    background: white;
    border-radius: ${theme.radius.x24}px;
    margin: ${theme.padding.x24}px ${theme.padding.x24}px;
    padding: ${theme.padding.x24}px;
    overflow: hidden;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`

const WrapperImage = styled.div`
    grid-column-end: 2 span;
    grid-row: 1/2;
    display: grid;
    grid-template-rows: max-content;
    background: white;
    width: 100%;
`
const imageCard = styled.img`
    justify-self: center;
    height: 300px;
    width: auto;
`
const WrapperDescription = styled.div`
    grid-row: 2/3;
    grid-column-end: 12 span;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    height: 50px;
`
const WrapperCardTitle = styled.div`
    display: grid;
`
const WrapperCardButton = styled.div`
    display: grid;
    padding-top: 8px;
`
const CardButton = styled(Button)`
    background: ${theme.linearGradient.cucumberWater};
    height: 40px;
`

export const Styled = {
    WrapperCard,
    WrapperDescription,
    WrapperImage,
    imageCard,
    WrapperCardTitle,
    WrapperCardButton,
    CardButton,
}
