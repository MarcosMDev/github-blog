import { BsBoxArrowInUpRight } from 'react-icons/bs'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import {
    FaChevronLeft,
    FaGithub,
    FaCalendarDay,
    FaComment,
} from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'
import {
    BodyPostInfoContainer,
    ContentPostContainer,
    HeaderPostInfoContainer,
    PostContainer,
    PostInfoContainer,
    TagsContainer,
} from './styles'
import { useContext, useEffect } from 'react'
import { PublicationContext } from '../../contexts/PublicationContext'
import { formatDate } from '../../utils/formtatDate'

export function Post() {
    const { fetchPublication, publication, loading } =
        useContext(PublicationContext)
    const { number } = useParams()

    useEffect(() => {
        fetchPublication(number!)
    }, [number, fetchPublication])

    return (
        <PostContainer>
            <PostInfoContainer>
                <HeaderPostInfoContainer>
                    <Link to="/">
                        <FaChevronLeft size={12} /> VOLTAR
                    </Link>
                    <a
                        href={publication.html_url}
                        target="_blank"
                        rel="noreferrer"
                    >
                        VER NO GITHUB <BsBoxArrowInUpRight size={12} />
                    </a>
                </HeaderPostInfoContainer>
                <BodyPostInfoContainer>
                    <strong>{publication.title}</strong>
                    <TagsContainer>
                        <span>
                            <FaGithub size={18} />{' '}
                            {publication.user
                                ? publication.user.login
                                : 'carregando'}
                        </span>
                        <span>
                            <FaCalendarDay size={18} />
                            {loading
                                ? 'carregando'
                                : formatDate(
                                      publication.created_at
                                          ? new Date(publication.created_at)
                                          : new Date(),
                                  )}
                        </span>
                        <span>
                            <FaComment size={18} />
                            {publication.comments} Comentários
                        </span>
                    </TagsContainer>
                </BodyPostInfoContainer>
            </PostInfoContainer>
            <ContentPostContainer>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {publication.body}
                </ReactMarkdown>
            </ContentPostContainer>
        </PostContainer>
    )
}
