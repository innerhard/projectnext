import styled from 'styled-components'
import { theme } from '@theme'

type TGradient = {
    gradient?: string
}
const WrapperContent = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
`
const WrapperIcon = styled.div<TGradient>`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ gradient = 'none' }) => gradient};
    border-radius: 50%;
    margin: 0 ${theme.padding.x8}px;
    height: 40px;
    width: 40px;
    padding: ${theme.padding.x8}px;
`

export const Styled = {
    WrapperContent,
    WrapperIcon,
}
