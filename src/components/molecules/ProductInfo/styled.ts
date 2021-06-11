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
    grid-row: 2/3;
    display: grid;
    grid-template-rows: max-content;
    background: white;
    width: 100%;
`
const imageCard = styled.img`
    justify-self: center;
    width: auto;
`
const WrapperDescription = styled.div`
    grid-row: 2/3;
    grid-column: 2/13;
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: min-content;
`
const WrapperCardTitle = styled.div`
    display: grid;
    grid-column: 1/13;
    align-self: center;
`
const WrapperCardButton = styled.div`
    grid-column: 1/13;
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
