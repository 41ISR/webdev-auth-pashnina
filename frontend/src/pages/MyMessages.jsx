import { useEffect, useState } from 'react'
import Feed from '../components/Feed'
import { useUserStore } from '../store/useUserStore'
import { api } from '../api/api'

const MyMessages = () => {
    const [myMessages, setMyMessages] = useState([])
    const session = useUserStore((state) => state.session)

    useEffect(() => {
        const load = async () => {
        try {
            const res = await api.getMessages()
            const myMessages = res.data.filter(msg => msg.userId === session.user.id)
            setMyMessages(myMessages)
        } catch (error) {
            console.error(error)
        }
    }
    load()
    }, [])
    return <Feed messages={myMessages}title="Мои сообщения" />
}

export default MyMessages
