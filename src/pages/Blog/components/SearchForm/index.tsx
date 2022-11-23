import { InfoPublicationsContainer, SearchFormContainer } from './styles'
import * as z from 'zod'
import { useContext } from 'react'
import { PublicationContext } from '../../../../contexts/PostsContext'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const searchFormSchema = z.object({
    query: z.string(),
})

type SearchFormInput = z.infer<typeof searchFormSchema>

export function SearchForm() {
    const { fetchPublications, publications } = useContext(PublicationContext)

    const {
        register,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm<SearchFormInput>({
        resolver: zodResolver(searchFormSchema),
    })

    async function handleSearchPulbication(data: SearchFormInput) {
        await fetchPublications(data.query)
    }

    return (
        <SearchFormContainer onSubmit={handleSubmit(handleSearchPulbication)}>
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
    )
}
