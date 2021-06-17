import styled from 'styled-components'
import { theme } from '@theme'

const WrapperContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    background: #f7fbfb;
    grid-template-rows: min-content;
    grid-column-gap: 16px;
    grid-row-gap: 48px;
    padding: 32px;
`
const WrapperFilter = styled.div`
    display: flex;
    grid-column-end: 12 span;
`
const WrapperCard = styled.div`
    grid-column-end: 6 span;

    @media (min-width: ${theme.breakpoint.desktopSm}px) {
        grid-column-end: 4 span;
    }
    @media (min-width: ${theme.breakpoint.desktopMd}px) {
        grid-column-end: 3 span;
    }
`

export const Styled = {
    WrapperContainer,
    WrapperFilter,
    WrapperCard,
}
