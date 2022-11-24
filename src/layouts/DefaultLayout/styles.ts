import styled from 'styled-components'

import backgroundHeader from '../../assets/backgroundHeader.svg'

export const Header = styled.header`
    background: ${(props) => props.theme['base-background']};

    width: 100%;

    height: 296px;

    background-image: url(${backgroundHeader});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`

export const LayoutContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 0 14rem;

    margin-top: -5rem;
    margin-bottom: 14rem;
`
