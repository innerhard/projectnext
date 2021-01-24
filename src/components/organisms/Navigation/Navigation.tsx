import React, { FC } from 'react'
import Link from 'next/link'
import { AppBar, Toolbar, Button, Typography } from '@material-ui/core'
import { TNavigation } from '../../../types'
import { Skeleton } from '@material-ui/lab'


export const Navigation: FC<TNavigation> = ({ data }): JSX.Element => {
    const menuItems = data?.map(item => {
        const { id, href, description } = item
        return (
            <Link passHref={true} key={id} href={href}>
                <Button color="inherit">{description}</Button>
            </Link>
        )
    })
    return (
        <AppBar position="static" color="transparent">
            <Toolbar>
                <Typography variant="h6">GOODBOY</Typography>
                <Typography variant="h6">
                    {menuItems ? (
                        menuItems
                    ) : (
                        <>
                            <Skeleton width={100} height={42} />
                        </>
                    )}
                </Typography>
            </Toolbar>
        </AppBar>
    )
}
