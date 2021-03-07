import React from 'react'
import { NotesProvider } from '../src/store'

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <NotesProvider>
                <Component {...pageProps} />
                <style jsx global>
                    {`
                        body {
                            padding: 0;
                            margin: 0;
                        }
                    `}
                </style>
            </NotesProvider>
        </>
    )
}
