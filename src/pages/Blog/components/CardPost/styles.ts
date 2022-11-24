import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const CardPostContainer = styled(Link)`
    text-decoration: none;

    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    width: 26rem;
    height: 16.25rem;

    border-radius: 10px;

    padding: 2rem;

    background: ${(props) => props.theme['base-post']};

    border: 2px solid transparent;

    &:hover {
        border: 2px solid ${(props) => props.theme['base-label']};
        transition: border 0.2s;
    }

    div {
        text-overflow: clip;
        overflow: hidden;
    }

    @media screen and (min-width: 200px) and (max-width: 1200px) {
        width: 100%;
    }
`

export const HeaderCard = styled.header`
    display: flex;
    gap: 1rem;
    align-items: baseline;

    span {
        font-size: 0.875rem;
        font-style: normal;
        line-height: 160%;

        width: max-content;

        color: ${(props) => props.theme['base-span']};
    }
`

export const TitleHeader = styled.strong`
    flex: 1;
    font-size: 1.25rem;
    line-height: 160%;

    color: ${(props) => props.theme['base-title']};
`

export const ParahraphBody = styled.p`
    color: ${(props) => props.theme['base-text']};
`
