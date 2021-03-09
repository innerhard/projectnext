import styled from 'styled-components'
import { theme } from '@theme'
import { Button } from '@material-ui/core'

const WrapperContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: max-content;
    grid-column-gap: 16px;
    grid-row-gap: 24px;
    padding: 32px;
    transition-duration: 0.2s;
`
const WrapperCard = styled.div`
    width: 200px;
    grid-column-end: 12 span;

    @media (min-width: ${theme.breakpoint.desktopSm}px) {
        grid-column-end: 6 span;
    }
    @media (min-width: ${theme.breakpoint.desktopMd}px) {
        grid-column-end: 6 span;
    }
`

const WrapperCount = styled.div`
    grid-column-end: 12 span;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`
const WrapperMessage = styled.div`
    display: grid;
    grid-row-gap: 24px;
    grid-column-end: 12 span;
    padding: 24px;
    min-height: 120px;
    background: ${theme.linearGradient.cucumberWater};
    border-radius: 24px;
`
const WrapperButton = styled.div`
    display: grid;
`
const ButtonDelivery = styled(Button)`
    background: ${theme.linearGradient.megaOrange};
`

export const Styled = {
    WrapperContainer,
    WrapperCount,
    WrapperCard,
    WrapperMessage,
    WrapperButton,
    ButtonDelivery,
}
