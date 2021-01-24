import styled from 'styled-components'
import { theme } from '@theme'

const WrapperCard = styled('div')`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 150px;
    background: rgb(2, 0, 36);
    background: ${theme.linearGradient.disco};
    border-radius: ${theme.radius.x24}px;
    padding: ${theme.padding.x24}px;
`
const imageCard = styled.img`
    margin: -48px;
    place-self: end;
`

export const Styled = {
    WrapperCard,
    imageCard,
}
