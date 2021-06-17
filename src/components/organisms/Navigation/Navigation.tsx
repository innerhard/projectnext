import React, { FC, useEffect, useState } from 'react'
import Link from 'next/link'
import { AppBar, Toolbar, Button, Typography, IconButton, InputBase } from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import LocalShippingIcon from '@material-ui/icons/LocalShipping'
import SearchIcon from '@material-ui/icons/Search'
import { TNavigation } from '../../../types'
import { Skeleton } from '@material-ui/lab'
import { Styled } from './styled'
import { useNotesStore } from '@store'
import { Observer } from 'mobx-react'
import debounce from 'lodash.debounce'
import { queryAPI } from '@api'

export const Navigation: FC<TNavigation> = ({ data }): JSX.Element => {
    const [searchValue, setValue] = useState(null)
    const [dataQuery, setData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (searchValue !== null) {
            queryAPI(`http://localhost:1337/products?productName_contains=${searchValue}`, setData, setError)
        }
    }, [searchValue])

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
    const totalDelivery = () => {
        return noteStore?.clientInfo?.idClient.length
    }
    return (
        <Observer>
            {() => {
                console.log(dataQuery)
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
                                <InputBase
                                    placeholder="Search…"
                                    inputProps={{ 'aria-label': 'search' }}
                                    //@ts-ignore
                                    onChange={e => debounce(() => setValue(e.target.value), 1500)()}
                                />
                            </Styled.WrapperSearch>
                            <Link href="/basket">
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
                            <Link href="/status">
                                <IconButton aria-label="cart">
                                    <Styled.BadgeStyle
                                        /* @ts-ignore */
                                        badgeContent={totalDelivery()}
                                        color="secondary"
                                    >
                                        <LocalShippingIcon />
                                    </Styled.BadgeStyle>
                                </IconButton>
                            </Link>
                        </Toolbar>
                    </AppBar>
                )
            }}
        </Observer>
    )
}
