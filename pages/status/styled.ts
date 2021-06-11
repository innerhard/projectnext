import styled from 'styled-components'
import { theme } from '../../src/theme'

const WrapperContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: max-content;
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    padding: 32px;
    border-radius: ${theme.radius.x24}px;
    background: ${theme.linearGradient.cucumberWater};
    margin-bottom: ${theme.padding.x24}px;

    &:before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 500px;
        height: 500px;
        filter: blur(25px);
    }

    &:nth-child(1),
    :nth-child(1)::before {
        background: ${theme.linearGradient.cucumberWater};
    }
`

export const Styled = {
    WrapperContainer,
}
