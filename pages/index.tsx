import React, { useEffect, useState } from 'react'
import { LayoutPage, Lesson } from '../src/components/organisms/'
import axios from 'axios'

const Course = () => {
    const [data, setData] = useState<null>(null)
    const [hasError, setError] = useState<boolean>(false)

    useEffect(() => {
        axios
            .get('http://localhost:4200/data')
            .then(({ data, status }) => {
                console.log('FUCK', data)

                if (status === 200) {
                    console.log('FUCK', data)
                    setData(data)
                } else {
                    setError(true)
                }
            })
            .catch(() => {
                setError(true)
            })
    }, [])
    if (hasError) {
        return <div>ERROR</div>
    }
    return (
        <LayoutPage json={data}>
            <Lesson />
        </LayoutPage>
    )
}

export default Course
