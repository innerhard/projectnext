import React, { FC, useReducer } from 'react'
import Link from 'next/link'
import { AppBar, Toolbar, Button, Typography, IconButton, InputBase } from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import SearchIcon from '@material-ui/icons/Search'
import { TNavigation } from '../../../types'
import { Skeleton } from '@material-ui/lab'
import { theme } from '@theme'
import { CustomIcon } from '@components'
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
                    <CustomIcon
                        gradient={theme.linearGradient.cucumberWater}
                        isActive={noteStore?.filter.cat}
                        handler={noteStore?.getFilterType}
                        type="cat"
                        name="cat"
                    >
                        <svg
                            width="40"
                            height="30"
                            viewBox="0 0 155 153"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M38.5452 26.1429L6.42631 6C6.42583 74 -4.20264 147 80.7101 147C158.797 147 147.967 76.5 147.967 6L115.84 26.1429C109.65 23.5226 95.7974 18 77.7974 18C59.7974 18 44.7355 23.5226 38.5452 26.1429Z"
                                stroke="black"
                                stroke-width="12"
                                stroke-linejoin="round"
                            />
                            <ellipse cx="44.7974" cy="77.5" rx="11" ry="13.5" fill="black" />
                            <ellipse cx="112.797" cy="77.5" rx="11" ry="13.5" fill="black" />
                            <path
                                d="M87.7974 94.5484C87.7974 91.7097 81.0666 91 77.7012 91C74.0666 91 66.7974 91.7097 66.7974 94.5484C66.7974 98.0968 74.4704 102 77.7012 102C80.932 102 87.7974 98.0968 87.7974 94.5484Z"
                                fill="black"
                                stroke="black"
                            />
                        </svg>
                    </CustomIcon>
                    <CustomIcon
                        gradient={theme.linearGradient.cucumberWater}
                        isActive={noteStore?.filter?.dog}
                        handler={noteStore?.getFilterType}
                        type="dog"
                        name="dog"
                    >
                        <svg
                            width="40"
                            height="30"
                            viewBox="0 0 186 160"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <ellipse cx="68.5" cy="76.5" rx="11.5" ry="13.5" fill="black" />
                            <ellipse cx="120" cy="76.5" rx="11" ry="13.5" fill="black" />
                            <path
                                d="M109 99.8387C109 95.9677 99.7051 95 95.0577 95C90.0385 95 80 95.9677 80 99.8387C80 104.677 90.5962 110 95.0577 110C99.5192 110 109 104.677 109 99.8387Z"
                                fill="black"
                                stroke="black"
                            />
                            <path
                                d="M34.2646 51.4409C34.2646 51.4409 30.2517 76.7211 35.6744 101.931M153.135 51.4409C153.135 51.4409 156.997 77.8591 150.695 103.614M35.6744 101.931C41.0669 127 55.7903 152 93.0697 152C129.515 152 144.701 128.107 150.695 103.614M35.6744 101.931C30.8638 103.894 19.2264 104.539 11.1617 91.4121C1.08086 75.0029 7.80144 49.7579 14.102 40.5014C20.4025 31.245 33.0046 6 93.0697 6C141.122 6 165 25.5 173.296 40.5014C181.592 55.5029 186 75 176.656 91.4121C168.026 106.57 154.728 105.157 150.695 103.614"
                                stroke="black"
                                stroke-width="12"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </CustomIcon>
                    <Link href="basket">
                        <IconButton aria-label="cart">
                            <Styled.BadgeStyle
                                /* @ts-ignore */
                                badgeContent={noteStore?.notes?.length ? noteStore?.notes?.length : 0}
                                color="secondary"
                            >
                                <ShoppingCartIcon />
                            </Styled.BadgeStyle>
                        </IconButton>
                    </Link>
                    <Styled.WrapperSearch>
                        <SearchIcon />
                        <InputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
                    </Styled.WrapperSearch>
                </Toolbar>
            </AppBar>
        )
    })
}
