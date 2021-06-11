import React, { useEffect, useState } from 'react'
import { useNotesStore } from '@store'
import { LayoutPage } from '@components'
import { queryAPI } from '@api'
import { Styled } from './styled'

const StatusPage = () => {
    const [data, setData] = useState<null>(null)
    const [hasError, setError] = useState<boolean>(false)

    const noteStore = useNotesStore()
    const getAllIds = ids =>
        ids?.map((item: [string], index: number) => {
            const lengthId = ids.length - 1

            if (index === lengthId) {
                return `id=${item}`
            }
            return `id=${item}&`
        })

    useEffect(() => {
        noteStore.clientInfo.idClient.length > 0 &&
            queryAPI(
                `http://localhost:1337/deliveries?${getAllIds(noteStore.clientInfo.idClient).join('')}`,
                setData,
                setError,
            )
    }, [])

    if (hasError) {
        return <div>ERROR</div>
    }
    return (
        <LayoutPage>
            <div>
                {data ? (
                    data?.map((items: any) => {
                        return (
                            <Styled.WrapperContainer key={items.id}>

                                <div>{items.id}</div>
                                <div>{JSON.parse(items.deliver).name}</div>
                                <div>{JSON.parse(items.deliver).phone}</div>
                                <div>{JSON.parse(items.deliver).address}</div>
                                <div>{JSON.parse(items.deliver).email}</div>
                                <div>{JSON.parse(items.deliver).delivery.length}</div>
                            </Styled.WrapperContainer>
                        )
                    })
                ) : (
                    <div>Доставка не оформлена</div>
                )}
            </div>
        </LayoutPage>
    )
}

export default StatusPage
