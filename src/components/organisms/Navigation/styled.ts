import styled from 'styled-components'
import Badge from '@material-ui/core/Badge'

const WrapperContainer = styled.div`
    grid-column: 2;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: max-content;
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    padding: 32px;
`
const WrapperCard = styled.div`
    grid-column-end: 4 span;
`
const BadgeStyle = styled(Badge)`
    color: black;
`
const WrapperSearch = styled.div`
    display: grid;
    grid-template-columns: 24px 1fr;
    margin: 16px 16px 16px;
    align-items: center;
    border-radius: 4px;
    border: 2px solid black;
`

export const Styled = {
    WrapperContainer,
    WrapperSearch,
    BadgeStyle,
    WrapperCard,
}
