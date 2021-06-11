import React from 'react'
import { Clothes, Eat, Pills, Toys } from '@icons'
import { TDataMenu } from '../types'

export const dataMenu: TDataMenu = [
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
