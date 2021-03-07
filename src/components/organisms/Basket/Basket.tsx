import React, { useEffect } from 'react'
import { Styled } from './styled'
import { CardBasket } from '@components'
import CircularProgress from '@material-ui/core/CircularProgress'
import { useNotesStore } from '@store'
import { useObserver } from 'mobx-react'
import { Typography } from '@material-ui/core'

export const Basket = () => {
    const noteStore = useNotesStore()
    const getTotalSum = () => {
        let sum = 0
        noteStore?.notes?.map(({ price }) => {
            sum += Number(price)
        })

        return sum
    }
    const content = useObserver(() =>
        noteStore?.notes?.map(({ id, description, productName, price, link }) => {
            return (
                <CardBasket
                    id={id}
                    key={id}
                    description={description}
                    title={productName}
                    price={price}
                    linkImage={link}
                    alt="Test"
                />
            )
        }),
    )
    return (
        <Styled.WrapperContainer>
            {content.length > 0 ? (
                <Styled.WrapperCount>
                    <div>
                        <Typography>Товаров на сумму</Typography>
                        <Typography>{getTotalSum()}</Typography>
                    </div>
                    <div>
                        <Typography>Всего товаров</Typography>
                        <Typography>{content.length}</Typography>
                    </div>
                </Styled.WrapperCount>
            ) : (
                <Typography>Ни одного товара не добавлено</Typography>
            )}
            {content}
        </Styled.WrapperContainer>
    )
}
