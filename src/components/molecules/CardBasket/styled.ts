import styled from 'styled-components'
import { theme } from '@theme'
import RemoveIcon from '@material-ui/icons/Remove'

const WrapperCard = styled('div')`
    grid-column-end: 12 span;
    display: grid;
    grid-template-columns: 150px 1fr 1fr;
    grid-template-rows: max-content max-content;
    height: 150px;
    border-radius: ${theme.radius.x24}px;
    padding: ${theme.padding.x24}px ${theme.padding.x40}px;
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
const imageCard = styled.img`
    height: 150px;
`
const WrapperDescription = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 30px;
    height: 150px;
`

export const Styled = {
    WrapperCard,
    CloseIcon,
    WrapperDescription,
    WrapperImage,
    imageCard,
}
