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

export const Styled = {
    WrapperContainer,
    BadgeStyle,
    WrapperCard,
}
