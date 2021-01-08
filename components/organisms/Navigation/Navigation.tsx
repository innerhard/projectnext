import React, { FC } from 'react'
import Link from 'next/link'
import { AppBar, Toolbar, Button, Typography } from '@material-ui/core'

type TNavigation = { data: { id: number; href: string; description: string }[] }

export const Navigation: FC<TNavigation> = ({ data }): JSX.Element => {
    const menuItems = data.map(item => {
        const { id, href, description } = item
        return (
            <Link passHref={true} key={id} href={href}>
                <Button color="inherit">{description}</Button>
            </Link>
        )
    })
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">{menuItems}</Typography>
            </Toolbar>
        </AppBar>
    )
}
