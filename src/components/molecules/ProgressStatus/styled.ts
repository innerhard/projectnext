import styled from 'styled-components'
import { theme } from '@theme'

type TStatus = {
    status: boolean
}
const Wrapper = styled.div`
    display: grid;
    grid-column-end: 5 span;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 2px;
    height: fit-content;
`
const ColStatus = styled.div<TStatus>`
    display: grid;
    height: 10px;
    background: ${({ status }) => (status ? theme.linearGradient.kaleSalad : 'gray')};
    border-radius: ${theme.radius.x8}px;
`
const WrapperInfoDelivery = styled.div`
    display: flex;
    grid-column-end: 4 span;
`
const InfoBlockCard = styled.div`
    background: white;
    border-radius: 24px;
    padding: 16px;
    margin: 0 0 16px 0;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
`

export const Styled = {
    Wrapper,
    ColStatus,
    WrapperInfoDelivery,
    InfoBlockCard,
}
