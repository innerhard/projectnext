import styled from 'styled-components'
import { theme } from '@theme'

const WrapperCard = styled('div')`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 50px;
    min-height: 200px;
    background: rgb(2, 0, 36);
    background: ${theme.linearGradient.cucumberWater};
    border-radius: ${theme.radius.x16}px;
    padding: ${theme.padding.x16}px;
`

export const Styled = {
    WrapperCard,
}
