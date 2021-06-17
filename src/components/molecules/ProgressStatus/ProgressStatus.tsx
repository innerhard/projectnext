import React, { FC } from 'react'
import { Typography } from '@material-ui/core'
import { Styled } from './styled'

type TCardProps = {
    status: 0 | 1 | 2 | 3
    timeInterval: string
}

export const ProgressStatus: FC<TCardProps> = ({ status, timeInterval }) => {
    // @ts-ignore
    return (
        <Styled.Wrapper>
            <Styled.WrapperInfoDelivery>
                <Styled.InfoBlockCard>
                    <Typography variant="subtitle1" color="initial">
                        {timeInterval}
                    </Typography>
                </Styled.InfoBlockCard>
            </Styled.WrapperInfoDelivery>
            <Styled.ColStatus status={status >= 0} />
            <Styled.ColStatus status={status >= 1} />
            <Styled.ColStatus status={status >= 2} />
            <Styled.ColStatus status={status === 3} />
            <Typography variant="caption" color="initial">
                Обработка
            </Typography>
            <Typography variant="caption" color="initial">
                Сборка
            </Typography>
            <Typography variant="caption" color="initial">
                Доставка
            </Typography>
            <Typography variant="caption" color="initial">
                Доставлен
            </Typography>
        </Styled.Wrapper>
    )
}
