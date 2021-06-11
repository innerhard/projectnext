import React from 'react'
import { Styled } from './styled'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

function createData(name: string, calories: number) {
    return { name, calories}
}

const rows = [
    createData('Frozen yoghurt', 159),
    createData('Ice cream sandwich', 237),
    createData('Eclair', 262),
    createData('Cupcake', 305),
    createData('Gingerbread', 356),
]

export const GridTableCustom = () => {
    return (
        <Styled.WrapperTable>
            <Table aria-label="customized table">
                <Styled.TableHeadBlock>
                    <TableRow>
                        <Styled.Cell>Dessert (100g serving)</Styled.Cell>
                        <Styled.Cell align="right">Gram</Styled.Cell>
                    </TableRow>
                </Styled.TableHeadBlock>
                <TableBody>
                    {rows.map(row => (
                        <Styled.Row key={row.name}>
                            <Styled.Cell component="th" scope="row">
                                {row.name}
                            </Styled.Cell>
                            <Styled.Cell align="right">{row.calories}</Styled.Cell>
                        </Styled.Row>
                    ))}
                </TableBody>
            </Table>
        </Styled.WrapperTable>
    )
}
