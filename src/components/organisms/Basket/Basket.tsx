import React, { useState } from 'react'
import { Styled } from './styled'
import { CardBasket, DeliveryForm } from '@components'
import { useNotesStore } from '@store'
import { observer } from 'mobx-react'
import {CircularProgress, Typography} from '@material-ui/core'

export const Basket = observer(() => {
    const [status, setStatus] = useState('basket')

    const noteStore = useNotesStore()
    const getTotalSum = () => {
        let sum = 0
        noteStore?.notes?.map(({ price }) => {
            sum += Number(price)
        })

        return sum
    }
    const totalCol = () => {
        let sum = 0
        noteStore?.notes?.map(({ count }) => {
            sum += count
        })

        return sum
    }

    const content = noteStore?.notes?.map(({ id, description, count, productName, price, link }) => {
        return (
            <CardBasket
                id={id}
                key={id}
                description={description}
                count={count}
                title={productName}
                price={price}
                linkImage={link}
                alt="Test"
            />
        )
    })

    const basketContent = (
        <>
            {content.length > 0 ? (
                <Styled.WrapperCount>
                    <div>
                        <Typography>Товаров на сумму</Typography>
                        <Typography>{getTotalSum()} ₽</Typography>
                    </div>
                    <div>
                        <Typography>Всего товаров</Typography>
                        <Typography>{totalCol()}</Typography>
                    </div>
                    <Styled.WrapperButton>
                        <Styled.ButtonDelivery onClick={() => setStatus('deliveryData')}>
                            Доставить
                        </Styled.ButtonDelivery>
                    </Styled.WrapperButton>
                </Styled.WrapperCount>
            ) : (
                <Typography>Ни одного товара не добавлено :(</Typography>
            )}
            {content.length > 0 && content}
        </>
    )

    return (
        <Styled.WrapperContainer>
            <Styled.WrapperMessage>
                {status === 'basket' && basketContent}
                {status === 'deliveryData' && <DeliveryForm setStatus={setStatus} />}
                {status === 'deliveryProgress' && (
                    <div>
                        <CircularProgress size={100} />
                    </div>
                )}
            </Styled.WrapperMessage>
        </Styled.WrapperContainer>
    )
})
