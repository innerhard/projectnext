import styled from 'styled-components'
import { theme } from '@theme'

type TGradient = {
    gradient?: string
}
const WrapperIcon = styled.div<TGradient>`
    display: flex;
    place-items: center;
    background: ${({ gradient = 'none' }) => gradient};
    border-radius: 50%;
    margin: 0 ${theme.padding.x8}px;
    height: 40px;
    padding: ${theme.padding.x8}px;
    cursor: pointer;
`

export const Styled = {
    WrapperIcon,
}
