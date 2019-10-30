import * as React from 'react'

import { AudioProps } from './Audio.types'

const { useRef, useEffect, useCallback } = React

export default function Audio(props: AudioProps): JSX.Element {
  const { url, paused = false, loop = false, onPlayStateChange, onTimeupdate } = props

  const audioRef = useRef(document.createElement('audio'))
  const intervalRef = useRef(0)

  const updateTime = useCallback(() => {
    if (onTimeupdate) {
      const { currentTime, duration } = audioRef.current
      intervalRef.current = window.requestAnimationFrame(updateTime)
      onTimeupdate(currentTime, duration)
    }
  }, [onTimeupdate])

  useEffect(() => {
    const audioEl: HTMLAudioElement = audioRef.current
    audioEl.volume = 0.1

    if (onPlayStateChange) {
      onPlayStateChange(paused)
    }
    if (paused) {
      audioEl.pause()
      window.cancelAnimationFrame(intervalRef.current)
    } else {
      audioEl.play()
      intervalRef.current = window.requestAnimationFrame(updateTime)
    }
    return (): void => {
      window.cancelAnimationFrame(intervalRef.current)
    }
  }, [onPlayStateChange, onTimeupdate, paused, updateTime])

  return <audio ref={audioRef} src={url} controls loop={loop} />
}
