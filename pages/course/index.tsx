import React, { useEffect, useState } from 'react'
import { LayoutPage, Lesson } from '@components'
import { queryAPI } from '../../src/api'

const Course = () => {
    const [data, setData] = useState<null>(null)
    const [hasError, setError] = useState<boolean>(false)

    useEffect(() => {
        queryAPI('http://localhost:1337/menus', setData, setError)
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
