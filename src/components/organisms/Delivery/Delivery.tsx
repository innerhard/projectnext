import React, { FC } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { Styled } from './styled'
import { useNotesStore } from '@store'
import { putDeliver } from '@api'
import axios from 'axios'

const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    name: yup.string('Введите свое имя').required('Email is required'),
    address: yup.string('Введите свой адрес').required('Email is required'),
    phone: yup.string('Введите свой адрес').required('Email is required'),
})

type TDelivery = {
    setStatus: React.SetStateAction<boolean>
}

export const DeliveryForm: FC<TDelivery> = ({ setStatus }) => {
    const noteStore = useNotesStore()
    const formik = useFormik({
        initialValues: {
            email: '',
            name: '',
            address: '',
            phone: '',
        },
        validationSchema: validationSchema,
        onSubmit: values => {
            alert(JSON.stringify({ ...values, ...{ delivery: noteStore.notes } }, null, 2))
            putDeliver(
                'http://localhost:1337/deliveries',
                JSON.stringify({ ...values, ...{ delivery: noteStore.notes } }, null, 2),
            )
        },
    })

    return (
        <div>
            <Styled.WrapperButton>
                <Styled.ButtonBack onClick={() => setStatus(false)}>Назад</Styled.ButtonBack>
            </Styled.WrapperButton>

            <form onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                    fullWidth
                    id="name"
                    name="name"
                    label="Ваше имя"
                    type="Text"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                />
                <TextField
                    fullWidth
                    id="address"
                    name="address"
                    label="Адрес доставки"
                    type="Text"
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    error={formik.touched.address && Boolean(formik.errors.address)}
                    helperText={formik.touched.address && formik.errors.address}
                />
                <TextField
                    fullWidth
                    id="phone"
                    name="phone"
                    label="Телефон"
                    type="Text"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                    helperText={formik.touched.phone && formik.errors.phone}
                />

                <Button color="primary" variant="contained" fullWidth type="submit">
                    Submit
                </Button>
            </form>
        </div>
    )
}
