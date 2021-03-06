import React, { FC } from 'react'
import Link from 'next/link'
import { AppBar, Toolbar, Button, Typography, IconButton, InputBase } from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import SearchIcon from '@material-ui/icons/Search'
import { TNavigation } from '../../../types'
import { Skeleton } from '@material-ui/lab'
import { Styled } from './styled'
import { useNotesStore } from '@store'
import { useObserver } from 'mobx-react'

export const Navigation: FC<TNavigation> = ({ data }): JSX.Element => {
    const noteStore = useNotesStore()
    const menuItems = data?.map(item => {
        const { id, href, description } = item
        return (
            <Link passHref={true} key={id} href={href}>
                <Button color="inherit">{description}</Button>
            </Link>
        )
    })

    const totalCol = () => {
        let sum = 0
        noteStore?.notes?.map(({ count }) => {
            sum += count
        })

        return sum
    }
    return useObserver(() => {
        return (
            <AppBar position="static" color="inherit" style={{ boxShadow: 'none', gridColumn: 2 }}>
                <Toolbar>
                    <Typography variant="h6">
                        {menuItems ? (
                            menuItems
                        ) : (
                            <>
                                <Skeleton width={100} height={42} />
                            </>
                        )}
                    </Typography>
                    <Styled.WrapperSearch>
                        <SearchIcon />
                        <InputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
                    </Styled.WrapperSearch>
                    <Link href="basket">
                        <IconButton aria-label="cart">
                            <Styled.BadgeStyle
                                /* @ts-ignore */
                                badgeContent={totalCol()}
                                color="secondary"
                            >
                                <ShoppingCartIcon />
                            </Styled.BadgeStyle>
                        </IconButton>
                    </Link>
                </Toolbar>
            </AppBar>
        )
    })
}
