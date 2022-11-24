import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import {
    InfoPublicationsContainer,
    PostsContainer,
    SearchFormContainer,
} from './styles'
import { Publication } from '../../../../contexts/PublicationContext'
import { useCallback, useEffect, useState } from 'react'
import { api } from '../../../../lib/axios'
import { CardPost } from '../CardPost'

const searchFormSchema = z.object({
    query: z.string(),
})

type SearchFormInput = z.infer<typeof searchFormSchema>

export function Publications() {
    const [publications, setPublications] = useState<Publication[]>([])
    const [loading, setLoading] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm<SearchFormInput>({
        resolver: zodResolver(searchFormSchema),
    })

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

    async function handleSearchPulbication(data: SearchFormInput) {
        await fetchPublications(data.query)
    }

    useEffect(() => {
        fetchPublications()
    }, [fetchPublications])

    return (
        <div>
            <SearchFormContainer
                onSubmit={handleSubmit(handleSearchPulbication)}
            >
                <InfoPublicationsContainer>
                    <span>Publicações</span>
                    <span>{publications.length} publicações</span>
                </InfoPublicationsContainer>
                <input
                    type="text"
                    placeholder="Busque por conteúdo"
                    disabled={isSubmitting}
                    {...register('query')}
                />
            </SearchFormContainer>
            <PostsContainer>
                {loading
                    ? 'carregando'
                    : publications.map((publication) => (
                          <CardPost
                              key={publication.id}
                              number={publication.number}
                              title={publication.title}
                              body={publication.body}
                              createdAt={publication.created_at}
                          />
                      ))}
            </PostsContainer>
        </div>
    )
}
