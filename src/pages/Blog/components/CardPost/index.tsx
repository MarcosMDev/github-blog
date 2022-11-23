import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { formatDate } from '../../../../utils/formtatDate'
import {
    CardPostContainer,
    HeaderCard,
    ParahraphBody,
    TitleHeader,
} from './styles'

interface CardPostProps {
    number: number
    title: string
    createdAt: string
    body: string
}

export function CardPost(props: CardPostProps) {
    return (
        <CardPostContainer to={`post/${props.number}`}>
            <HeaderCard>
                <TitleHeader>{props.title}</TitleHeader>
                <span>{formatDate(new Date(props.createdAt))}</span>
            </HeaderCard>
            <div>
                <ParahraphBody>{props.body}</ParahraphBody>
            </div>
        </CardPostContainer>
    )
}
