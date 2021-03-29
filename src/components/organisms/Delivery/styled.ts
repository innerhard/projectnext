import styled from 'styled-components'
import { Button } from '@material-ui/core'
import { theme } from '../../../theme'

const WrapperContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: max-content;
    grid-column-gap: 16px;
    grid-row-gap: 24px;
    padding: 32px;
    transition-duration: 0.2s;
`
const ButtonBack = styled(Button)`
    background: ${theme.linearGradient.megaOrange};
    padding: 6px 8px;
`
const WrapperButton = styled.div`
    margin-bottom: 24px;
    height: 48px;
`

export const Styled = {
    WrapperContainer,
    WrapperButton,
    ButtonBack,
}
