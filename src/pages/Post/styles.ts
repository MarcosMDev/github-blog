import styled from 'styled-components'

export const PostContainer = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
`

export const PostInfoContainer = styled.div`
    display: flex;
    flex-direction: column;

    padding: 2rem;

    background: ${(props) => props.theme['base-profile']};

    border-radius: 10px;
`

export const HeaderPostInfoContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
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
    }
`

export const BodyPostInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    margin-top: 1.25rem;

    strong {
        font-size: 1.5rem;

        color: ${(props) => props.theme['base-title']};
    }
`

export const TagsContainer = styled.div`
    display: flex;
    gap: 2rem;

    span {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        color: ${(props) => props.theme['base-span']};

        font-size: 1rem;
    }

    @media screen and (min-width: 200px) and (max-width: 1040px) {
        flex-direction: column;
    }
`
export const ContentPostContainer = styled.div`
    display: flex;
    flex-direction: column;

    padding: 2.5rem 2rem;

    p {
        color: ${(props) => props.theme['base-text']};
        line-height: 160%;

        margin: 1rem 0;
    }

    img {
        margin: 1.5rem 0;
        width: 100%;
    }

    a {
        color: ${(props) => props.theme.blue};

        text-decoration: none;

        border-bottom: 1px solid transparent;

        &:hover {
            border-bottom: 1px solid ${(props) => props.theme.blue};
        }
    }
`
