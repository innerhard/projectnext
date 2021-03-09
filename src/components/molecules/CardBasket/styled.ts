import styled from 'styled-components'
import { theme } from '@theme'
import RemoveIcon from '@material-ui/icons/Remove'

const WrapperCard = styled('div')`
    grid-column-end: 12 span;
    display: grid;
    grid-template-columns: 150px 1fr max-content;
    grid-template-rows: max-content max-content;
    min-height: 150px;
    border-radius: ${theme.radius.x24}px;
    background: white;
    padding: ${theme.padding.x16}px ${theme.padding.x24}px;
    overflow: hidden;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`
const CloseIcon = styled(RemoveIcon)`
    position: absolute;
    z-index: 10;
    margin-top: -32px;
    right: 20px;
    padding: 4px;
    border-radius: 50%;
    background: white;
    border: 2px solid black;

    &:hover {
        color: red;
        border: 2px solid black;
    }
`
const WrapperImage = styled.div`
    display: grid;
    grid-template-rows: max-content;
    background: white;
    height: 150px;
`
const WrapperTitle = styled.div`
    grid-column: 1/4;
`
const imageCard = styled.img`
    height: 150px;
`

export const Styled = {
    WrapperCard,
    WrapperTitle,
    CloseIcon,
    WrapperImage,
    imageCard,
}
