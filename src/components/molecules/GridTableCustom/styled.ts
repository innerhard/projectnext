import styled from 'styled-components'
import { theme } from '@theme'
import { TableRow, TableCell, TableHead } from '@material-ui/core'

const Cell = styled(TableCell)`
    background: ${theme.colors.black};
    color: ${theme.colors.white};
    font-size: 14px;
`
const Row = styled(TableRow)`
    background-color: ${theme.colors.blue};
`
const TableHeadBlock = styled(TableHead)`
    background: yellowgreen;
`
const WrapperTable = styled.div`
    display: grid;
`

export const Styled = {
    Cell,
    Row,
    TableHeadBlock,
    WrapperTable,
}
