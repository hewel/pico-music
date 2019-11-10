import { createContext } from 'react'

interface SongContextValue {
    id?: number
    name?: string
    url?: string
    album?: {
        picUrl: string
    }
    artist?: { name: string }[]
}

const Context = createContext<SongContextValue>({})

export default Context
