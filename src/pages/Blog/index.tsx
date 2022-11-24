import { FaGithub, FaBuilding, FaUsers } from 'react-icons/fa'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import {
    InfoProfileContainer,
    LinkHeaderProfile,
    MainContainer,
    PersonalInfoContainer,
    ProfileContainer,
    TagInfoContainer,
} from './styles'
import { useCallback, useContext, useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import { PublicationContext } from '../../contexts/PublicationContext'
import { Publications } from './components/Publications'

interface Profile {
    name: string
    avatar_url: string
    html_url: string
    bio: string
    login: string
    company: string
    followers: number
}

export function Blog() {
    const { loading } = useContext(PublicationContext)
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
                            <LinkHeaderProfile href={profile.html_url}>
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
            <Publications />
        </MainContainer>
    )
}
