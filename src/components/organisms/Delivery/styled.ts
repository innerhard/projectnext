import styled from 'styled-components'

const WrapperContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: max-content;
    grid-column-gap: 16px;
    grid-row-gap: 24px;
    padding: 32px;
    transition-duration: 0.2s;
`

export const Styled = {
    WrapperContainer,
}
