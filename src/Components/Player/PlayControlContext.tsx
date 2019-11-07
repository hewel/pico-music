import { createContext } from 'react'

export interface ControlCallbacks {
  onRepeatChange?: (mode: string) => void
  onPlay?: (paused: boolean) => void
  onSongSwitch?: (isNext: boolean) => void
  onVolumeChange?: (volume: number) => void
}

const PlayControlContext = createContext<ControlCallbacks>({})

export default PlayControlContext
