import styled from 'styled-components'
import '@fontsource/secular-one'
import Link from 'next/link'

const DrawerMenu = styled.div`
    position: fixed;
    display: grid;
    grid-template-rows: 100px max-content max-content max-content;
    grid-row-gap: 32px;
    justify-items: start;
    grid-template-rows: max-content;
    width: 200px;
    background-color: white;
`
const HeadingLogo = styled.h1`
    font-family: 'Secular One';
    font-size: 28px;
    line-height: 28px;
    color: #d13535;
`
const WrapperItems = styled.div`
    display: grid;
    grid-row-gap: 16px;
    padding: 0 8px;
    justify-self: center;
`
const WrapperAnimalIcon = styled.div`
    display: grid;
    grid-column-gap: auto;
    grid-template-columns: 1fr 1fr;
    margin: 0 auto;
`
const Wrapper = styled.div`
    display: grid;
    grid-row-gap: 16px;
    padding: 0 8px;
`
const UnDecoration = styled.a`
    &:link {
        color: unset;
        text-decoration: none;
    }

    &:visited {
        color: unset;
        text-decoration: none;
    }

    &:hover {
        color: unset;
        text-decoration: none;
    }

    &:active {
        color: unset;
        text-decoration: none;
    }
`
const WrapperLogo = styled.a`
    display: flex;
    place-self: center;
    text-decoration: none;
`
const SVGWrapper = styled.div`
    height: 100px;
    width: 200px;
`
export const Styled = {
    DrawerMenu,
    HeadingLogo,
    SVGWrapper,
    Wrapper,
    WrapperAnimalIcon,
    WrapperItems,
    WrapperLogo,
    UnDecoration,
}
