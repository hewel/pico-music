import { createContext } from 'react'

export interface ControlCallbacks {
  onRepeatChange?: (mode: string) => void
  onPlay?: (paused: boolean) => void
  onTimeupdate?: (timeGroup: [number, number], timeRatio: number) => void
  onSongEnded?: (event: React.SyntheticEvent<HTMLAudioElement, Event>) => void
  onSongSwitch?: (isNext: boolean) => void
  onVolumeChange?: (volume: number) => void
}

const PlayControlContext = createContext<ControlCallbacks>({})

export default PlayControlContext
