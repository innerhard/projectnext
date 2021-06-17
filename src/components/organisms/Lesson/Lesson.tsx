import React, { useEffect, useState } from 'react'
import { queryAPI } from '@api'
import { Styled } from './styled'
import { Card } from '@components'
import CircularProgress from '@material-ui/core/CircularProgress'
import Chip from '@material-ui/core/Chip';
import { useNotesStore } from '@store'
import { Observer } from 'mobx-react'

export const Lesson = () => {
    const [typeSort, setSort] = useState('asc')
    const [data, setData] = useState<null>(null)
    const [hasError, setError] = useState<boolean>(false)

    const noteStore = useNotesStore()

    useEffect(() => {
        queryAPI(`http://localhost:1337/products?_sort=price:${typeSort}`, setData, setError)
    }, [typeSort])

    return <Observer>{()=> {
        let filterData = data
        if (filterData && noteStore?.filter.cat & !noteStore?.filter.dog) {
            filterData = filterData.filter(item => {
                return item.cat === true
            })
        }

        if ( filterData && !noteStore?.filter.cat & noteStore?.filter.dog) {
            filterData = filterData.filter(item => {
                return item.dog === true
            })
        }

        const content = filterData?.map(({ id, description, productName, price, link, type }) => {

            if(!noteStore?.filter.feed &&
                !noteStore?.filter.clothes &&
                !noteStore?.filter.medications &&
                !noteStore?.filter.toys)
            { return <Card
                    id={id}
                    description={description}
                    title={productName}
                    price={price}
                    linkImage={link}
                    alt="Test"
                />

            }

            if(noteStore?.filter.[type] && !noteStore?.filter.cat && !noteStore?.filter.dog) {
                return (
                    <Styled.WrapperCard key={id}>
                        <Card
                            id={id}
                            description={description}
                            title={productName}
                            price={price}
                            linkImage={link}
                            alt="Test"
                        />
                    </Styled.WrapperCard>
                )
            }
            if(noteStore?.filter.[type] && noteStore?.filter.cat && noteStore?.filter.dog) {
                return (
                    <Styled.WrapperCard key={id}>
                        <Card
                            id={id}
                            description={description}
                            title={productName}
                            price={price}
                            linkImage={link}
                            alt="Test"
                        />
                    </Styled.WrapperCard>
                )
            }
            if(noteStore?.filter.[type] && (!noteStore?.filter.cat || !noteStore?.filter.dog)) {
                return (
                    <Styled.WrapperCard key={id}>
                        <Card
                            id={id}
                            description={description}
                            title={productName}
                            price={price}
                            linkImage={link}
                            alt="Test"
                        />
                    </Styled.WrapperCard>
                )
            }
        })
        console.log("Я выполняюсь")
        return(
         <Styled.WrapperContainer>
            <Styled.WrapperFilter>
            <Chip label="asc" variant="outlined" onClick={()=>   setSort('asc')}/>
            <Chip label="desc" variant="outlined" onClick={()=>  setSort('DESC')}/>
            </Styled.WrapperFilter>
            {filterData ? content : <CircularProgress />}
        </Styled.WrapperContainer>
        )

    }}</Observer>
}
