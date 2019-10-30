export interface AudioProps {
    className?: string
    url: string
    paused?: boolean
    loop?: boolean
    onPlayStateChange?: (paused: boolean) => void
    onTimeupdate?: (currentTime: number, duration: number) => void
}
