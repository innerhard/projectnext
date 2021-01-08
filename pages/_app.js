import React from 'react'

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
            <style jsx global>
                {`
                    body {
                        padding: 0;
                        margin: 0;
                    }
                `}
            </style>
        </>
    )
}
