import React, { useEffect, useState } from 'react'
import { useNotesStore } from '@store'
import { LayoutPage, ProgressStatus } from '@components'
import { queryAPI } from '@api'
import { Styled } from './styled'
import { Typography } from '@material-ui/core'

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
            queryAPI(`http://localhost:1337/deliveries?${getAllIds(noteStore.clientInfo.idClient).join('')}`, setData, setError)
    }, [])

    if (hasError) {
        return <div>ERROR</div>
    }
    return (
        <LayoutPage>
            <div>
                {data ? (
                    data?.map((items: any) => {
                        console.table(items)
                        const result = JSON.parse(items.deliver)
                        return (
                            <Styled.WrapperContainer key={items.id}>
                                <Styled.WrapperRow>
                                    <Typography variant="h5">
                                        {result.name} ваш № заказа:{items.id}
                                    </Typography>
                                    <Typography variant="subtitle1">привезем по адресу: {result.address}</Typography>
                                </Styled.WrapperRow>
                                <ProgressStatus status={result.status} timeInterval="Доставка с 12:20 21.01.2022" />
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
