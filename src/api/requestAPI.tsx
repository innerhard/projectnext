import axios from 'axios'
import React from 'react'

export const getAPI = axios.post('http://localhost:1337/auth/local', {
    identifier: 'innerhard@gmail.com',
    password: '11111111Qq',
})

export const queryAPI = (
    link: string,
    setData: { (value: React.SetStateAction<null>): void; (arg0: any): void },
    setError: { (value: React.SetStateAction<boolean>): void; (arg0: boolean): void },
) => {
    getAPI.then(item => {
        if (item.status === 200) {
            axios
                .get(link, {
                    headers: { Authorization: `Bearer ${item.data?.jwt}` },
                })
                .then(({ data, status }) => {
                    if (status === 200) {
                        setData(data)
                    } else {
                        setError(true)
                    }
                })
                .catch(() => {
                    setError(true)
                })
        }
    })
}
export const putDeliver = (link: string, object: {}) => {
    getAPI.then(item => {
        if (item.status === 200) {
            axios.post(link, {
                deliver: object,
            })
        }
    })
}

export const queryAPIStatic = (link: string) => {
    getAPI.then(item => {
        if (item.status === 200) {
            axios.get(link, {
                headers: { Authorization: `Bearer ${item.data?.jwt}` },
            })
        }
    })
}
