import styled from 'styled-components'
import { theme } from '../../src/theme'

const WrapperContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: max-content;
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    padding: 32px;
    border-radius: ${theme.radius.x24}px;
    background: ${theme.linearGradient.cucumberWater};
    margin-bottom: ${theme.padding.x24}px;
`
const WrapperRow = styled.div`
    display: grid;
    grid-column-end: 5 span;
`


export const Styled = {
    WrapperContainer,
    WrapperRow
}
