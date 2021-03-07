import styled from 'styled-components'
import { theme } from '@theme'

const WrapperContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: max-content;
    grid-column-gap: 16px;
    grid-row-gap: 24px;
    padding: 32px;
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
    grid-template-columns: repeat(2, 1fr);
`

export const Styled = {
    WrapperContainer,
    WrapperCount,
    WrapperCard,
}
