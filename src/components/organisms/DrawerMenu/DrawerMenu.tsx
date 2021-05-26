import React, { FC } from 'react'
import { Styled } from './styled'
import { Cat, Dog, Eat, Clothes, Pills, Toys } from '@icons'
import Link from 'next/link'
import { CustomIcon } from '../../molecules/CustomIcon'
import { theme } from '@theme'
import { useObserver } from 'mobx-react'
import { useNotesStore } from '@store'

type TDataMenu = {
    id: number
    icon?: JSX.Element
    label?: string
    link?: string
    type: 'feed' | 'toys' | 'clothes' | 'medications'
}[]

const dataMenu: TDataMenu = [
    {
        id: 1,
        icon: <Eat width="30" height="30" />,
        label: 'Корма',
        link: '#',
        type: 'feed',
    },
    {
        id: 2,
        icon: <Clothes width="30" height="30" />,
        label: 'Одежда',
        link: '#',
        type: 'clothes',
    },
    {
        id: 3,
        icon: <Pills width="30" height="30" />,
        label: 'Лекарства',
        link: '#',
        type: 'medications',
    },
    {
        id: 4,
        icon: <Toys width="30" height="30" />,
        label: 'Игрушки',
        link: '#',
        type: 'toys',
    },
]
export const DrawerMenu: FC = () => {
    const noteStore = useNotesStore()
    return useObserver(() => {
        return (
            <Styled.DrawerMenu>
                <Link passHref={true} href="/">
                    <Styled.WrapperLogo>
                        <Styled.HeadingLogo>REDCAT.RU</Styled.HeadingLogo>
                    </Styled.WrapperLogo>
                </Link>
                <Styled.WrapperAnimalIcon>
                    <CustomIcon
                        gradient={theme.linearGradient.cucumberWater}
                        isActive={noteStore?.filter.cat}
                        handler={noteStore?.getFilterType}
                        type="cat"
                        name="cat"
                    >
                        <Cat width="40" height="30" />
                    </CustomIcon>
                    <CustomIcon
                        gradient={theme.linearGradient.cucumberWater}
                        isActive={noteStore?.filter?.dog}
                        handler={noteStore?.getFilterType}
                        type="dog"
                        name="dog"
                    >
                        <Dog width="40" height="30" />
                    </CustomIcon>
                </Styled.WrapperAnimalIcon>
                <Styled.WrapperItems>
                    {dataMenu.map(({ label, icon, type, gradient }) => (
                        <CustomIcon
                            gradient={theme.linearGradient.cucumberWater}
                            isActive={noteStore?.filter[type]}
                            handler={noteStore?.getFilterType}
                            text={label}
                            type={type}
                            name="cat"
                        >
                            {icon}
                        </CustomIcon>
                    ))}
                </Styled.WrapperItems>
                {/*<Styled.Wrapper>*/}
                {/*    <SpecialOffer description="Попробуй мобильное приложение" link="#" />*/}
                {/*</Styled.Wrapper>*/}
            </Styled.DrawerMenu>
        )
    })
}
