import { createContext, ReactNode, useCallback, useState } from 'react'
import { api } from '../lib/axios'

interface PublicationProviderProps {
    children: ReactNode
}

export interface Publication {
    id: number
    number: number
    title: string
    body: string
    comments: number
    html_url: string
    user: {
        login: string
    }
    created_at: string
}

interface PublicationContextType {
    loading: boolean
    publication: Publication
    fetchPublication: (number: string) => Promise<void>
}

export const PublicationContext = createContext<PublicationContextType>(
    {} as PublicationContextType,
)

export function PublicationProvider({ children }: PublicationProviderProps) {
    const [loading, setLoading] = useState(false)
    const [publication, setPublication] = useState<Publication>(
        {} as Publication,
    )

    const fetchPublication = useCallback(async (number: string) => {
        setLoading(true)
        const response = await api.get(
            `https://api.github.com/repos/rocketseat-education/reactjs-github-blog-challenge/issues/${number}`,
        )

        setPublication(response.data)
        setLoading(false)
    }, [])

    return (
        <PublicationContext.Provider
            value={{
                loading,
                publication,
                fetchPublication,
            }}
        >
            {children}
        </PublicationContext.Provider>
    )
}
