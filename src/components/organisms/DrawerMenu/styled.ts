import styled from 'styled-components'

const DrawerMenu = styled.div`
    position: fixed;
    display: grid;
    grid-template-rows: 100px max-content max-content max-content;
    grid-row-gap: 48px;
    justify-items: start;
    grid-template-rows: max-content;
    width: 150px;
    background-color: white;
`
const WrapperItems = styled.div`
    display: grid;
    grid-row-gap: 16px;
    padding: 0 8px;
    justify-self: center;
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
const WrapperLogo = styled.div`
    display: flex;
    place-self: center;
    height: 100px;
`
const SVGWrapper = styled.div`
    height: 100px;
    width: 150px;
`
export const Styled = {
    DrawerMenu,
    SVGWrapper,
    Wrapper,
    WrapperItems,
    WrapperLogo,
    UnDecoration,
}
