import styled from 'styled-components'
import { theme } from '@theme'

type TGradient = {
    linearGradient?: string
}

const WrapperButton = styled('div')`
    display: grid;
    grid-template-columns: max-content max-content;
    align-items: center;
    grid-column-gap: 16px;
`
const WrapperIcon = styled.div<TGradient>`
    display: flex;
    background: ${({ linearGradient = theme.linearGradient.cucumberWater }) => linearGradient};
    width: 40px;
    height: 40px;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
`

export const Styled = {
    WrapperButton,
    WrapperIcon,
}
