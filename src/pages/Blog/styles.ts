import styled from 'styled-components'

export const MainContainer = styled.main`
    display: flex;
    flex-direction: column;

    margin: 0 18rem;

    width: 100%;
`

export const ProfileContainer = styled.div`
    display: flex;
    gap: 2rem;

    background: ${(props) => props.theme['base-profile']};

    width: 100%;
    padding: 2rem 2.5rem;
    border-radius: 10px;

    img {
        width: 9.25rem;
        height: 9.25rem;

        border-radius: 8px;
    }

    margin-bottom: 4.5rem;

    @media screen and (min-width: 200px) and (max-width: 1040px) {
        img {
            display: none;
        }
    }
`

export const InfoProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        h1 {
            font-size: 1.5rem;
            font-style: normal;
            font-weight: 400;
            line-height: 130%;

            color: ${(props) => props.theme['base-title']};

            margin-bottom: 0.5rem;
        }

        @media screen and (min-width: 200px) and (max-width: 1040px) {
            align-items: center;
        }
    }

    p {
        font-weight: 700;
        color: ${(props) => props.theme['base-text']};

        margin-bottom: 1.5rem;
    }
`

export const LinkHeaderProfile = styled.a`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    font-size: 0.75rem;

    color: ${(props) => props.theme.blue};

    text-decoration: none;

    border-bottom: 1px solid transparent;

    &:hover {
        border-bottom: 1px solid ${(props) => props.theme.blue};
    }
`

export const PersonalInfoContainer = styled.div`
    display: flex;
    gap: 1.5rem;
    align-items: center;

    @media screen and (min-width: 200px) and (max-width: 1040px) {
        flex-direction: column;
        align-items: flex-start;
    }
`

export const TagInfoContainer = styled.span`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    font-weight: 700;

    color: ${(props) => props.theme['base-subtitle']};

    svg {
        color: ${(props) => props.theme['base-label']};
    }
`
