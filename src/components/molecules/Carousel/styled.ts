import styled from 'styled-components'
import { theme } from '@theme'

const Wrapper = styled.div`
    display: grid;
    box-sizing: border-box;
    overflow: scroll;
    padding: 16px 0;
`
const WrapperCard = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    min-height: 280px;
    width: 280px;
    background: rgb(2, 0, 36);
    background: ${theme.linearGradient.cucumberWater};
    border-radius: ${theme.radius.x24}px;
    padding: ${theme.padding.x24}px;
`
const imageCard = styled.img`
    width: 100px;
    height: 100px;
`

export const Styled = {
    Wrapper,
    WrapperCard,
    imageCard,
}
