import {
    createContext,
    ReactNode,
    useCallback,
    useEffect,
    useState,
} from 'react'
import { api } from '../lib/axios'

interface PublicationProviderProps {
    children: ReactNode
}

interface Publication {
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
    publications: Publication[]
    publication: Publication
    fetchPublications: (query?: string) => Promise<void>
    fetchPublication: (number: string) => Promise<void>
}

export const PublicationContext = createContext<PublicationContextType>(
    {} as PublicationContextType,
)

export function PublicationProvider({ children }: PublicationProviderProps) {
    const [loading, setLoading] = useState(false)
    const [publications, setPublications] = useState<Publication[]>([])
    const [publication, setPublication] = useState<Publication>(
        {} as Publication,
    )

    const fetchPublications = useCallback(async (query?: string) => {
        setLoading(true)
        const response = await api.get('/search/issues', {
            params: {
                q: `${
                    query || ''
                }repo:rocketseat-education/reactjs-github-blog-challenge`,
            },
        })

        setPublications(response.data.items)
        setLoading(false)
    }, [])

    const fetchPublication = useCallback(async (number: string) => {
        setLoading(true)
        const response = await api.get(
            `https://api.github.com/repos/rocketseat-education/reactjs-github-blog-challenge/issues/${number}`,
        )

        setPublication(response.data)
        setLoading(false)
    }, [])

    useEffect(() => {
        fetchPublications()
    }, [fetchPublications])

    return (
        <PublicationContext.Provider
            value={{
                loading,
                publication,
                publications,
                fetchPublications,
                fetchPublication,
            }}
        >
            {children}
        </PublicationContext.Provider>
    )
}
