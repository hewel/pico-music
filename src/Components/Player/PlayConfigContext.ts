import { createContext } from 'react'

interface PlayConfig {
    interval: number
}

export default createContext<PlayConfig>({
    interval: 100,
})
