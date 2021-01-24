import React from 'react'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import { Card } from '@components'
export function Lesson() {
    return (
        <Container maxWidth={false} style={{ marginTop: '16px' }}>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Card
                        linkImage={
                            'https://upload.wikimedia.org/wikipedia/commons/9/9d/Tomato.png'
                        }
                        alt="Test"
                    />
                </Grid>
            </Grid>
        </Container>
    )
}
