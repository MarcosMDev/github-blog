import { FaGithub, FaBuilding, FaUsers } from 'react-icons/fa'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import {
    InfoProfileContainer,
    LinkHeaderProfile,
    MainContainer,
    PersonalInfoContainer,
    PostsContainer,
    ProfileContainer,
    TagInfoContainer,
} from './styles'
import { SearchForm } from './components/SearchForm'
import { CardPost } from './components/CardPost'
import { useCallback, useContext, useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import { PublicationContext } from '../../contexts/PostsContext'

interface Profile {
    name: string
    avatar_url: string
    url: string
    bio: string
    login: string
    company: string
    followers: number
}

export function Blog() {
    const { publications, loading } = useContext(PublicationContext)
    const [profile, setProfile] = useState<Profile>({} as Profile)

    const fetchProfile = useCallback(async () => {
        const response = await api.get('users/MarcosMDev')

        setProfile(response.data)
    }, [])

    useEffect(() => {
        fetchProfile()
    }, [fetchProfile])

    return (
        <MainContainer>
            {loading ? (
                'carregando'
            ) : (
                <ProfileContainer>
                    <img src={profile.avatar_url} alt="" />
                    <InfoProfileContainer>
                        <header>
                            <h1>{profile.name}</h1>
                            <LinkHeaderProfile href={profile.url}>
                                GITHUB <BsBoxArrowUpRight size={12} />
                            </LinkHeaderProfile>
                        </header>
                        <p>{profile.bio}</p>
                        <PersonalInfoContainer>
                            <TagInfoContainer>
                                <FaGithub size={18} /> {profile.login}
                            </TagInfoContainer>
                            <TagInfoContainer>
                                <FaBuilding size={18} /> {profile.company}
                            </TagInfoContainer>
                            <TagInfoContainer>
                                <FaUsers size={18} /> {profile.followers}{' '}
                                seguidores
                            </TagInfoContainer>
                        </PersonalInfoContainer>
                    </InfoProfileContainer>
                </ProfileContainer>
            )}

            <SearchForm />
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
        </MainContainer>
    )
}
