import styled from 'styled-components'

export const SearchFormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
    width: 100%;

    input {
        width: 100%;

        border-radius: 6px;
        border: 0;
        border: 1px solid ${(props) => props.theme['base-border']};

        background: ${(props) => props.theme['base-input']};
        color: ${(props) => props.theme['base-label']};
        padding: 1rem;

        &:focus {
            color: ${(props) => props.theme['base-text']};
            border: 1px solid ${(props) => props.theme.blue};
        }

        &:disabled {
            border: 1px solid ${(props) => props.theme['base-post']};
            cursor: not-allowed;
        }
    }
`

export const InfoPublicationsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    span:first-child {
        font-size: 1.125rem;
        font-weight: 700;

        color: ${(props) => props.theme['base-subtitle']};
    }

    span:last-child {
        font-size: 0.875rem;
        color: ${(props) => props.theme['base-span']};
    }
`

export const PostsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    row-gap: 2rem;

    margin-top: 3rem;

    @media screen and (min-width: 200px) and (max-width: 1120px) {
        flex-direction: column;
        gap: 2rem;
    }
`
