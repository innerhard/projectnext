import React, { FC } from 'react'
import { Navigation } from '../Navigation'

type TLayoutPage = {
    json?: any
}
export const LayoutPage: FC<TLayoutPage> = ({ json, children }) => {

    return (
        <>
            <Navigation data={json} />
            <main>{children}</main>
        </>
    )
}
