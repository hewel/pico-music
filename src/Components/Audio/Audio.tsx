import * as React from 'react'

import calcRatio from '../../Utils/_calcRatio'

const { useState, useRef, useEffect, useCallback } = React

interface AudioProps {
  className?: string
  url: string
  paused?: boolean
  precision?: number
  interval?: number
  controls?: boolean
  volume?: number
  onPlayStateChange?: (paused: boolean) => void
  onTimeupdate?: (timeGroup: [number, number], timeRatio: number) => void
  onEnded?: (event: React.SyntheticEvent<HTMLAudioElement, Event>) => void
}

export default function Audio(props: AudioProps): JSX.Element {
  const {
    url,
    paused = false,
    interval = 200,
    onPlayStateChange,
    onTimeupdate,
    onEnded,
    controls,
    volume = 20,
  } = props

  const audioRef = useRef(document.createElement('audio'))
  const intervalRef = useRef(0)
  const [, setTimeGroup] = useState([0, 0])

  const updateTime = useCallback(() => {
    if (onTimeupdate) {
      const { currentTime, duration } = audioRef.current
      const valueGroup: [number, number] = [currentTime, duration]
      setTimeGroup(valueGroup)
      onTimeupdate(
        [currentTime, duration],
        parseFloat((currentTime / duration).toFixed(4)) * 100
      )
    }
  }, [onTimeupdate])

  useEffect(() => {
    const audioEl: HTMLAudioElement = audioRef.current
    audioEl.volume = 0.2
    if (onPlayStateChange) {
      onPlayStateChange(paused)
    }
    if (paused) {
      audioEl.pause()
      window.clearInterval(intervalRef.current)
    } else {
      audioEl.play()
      intervalRef.current = window.setInterval(updateTime, interval)
    }
    return (): void => {
      window.clearInterval(intervalRef.current)
    }
  }, [interval, onPlayStateChange, paused, updateTime])

  useEffect(() => {
    const audioEl: HTMLAudioElement = audioRef.current
    audioEl.volume = volume / 100
  }, [volume])

  return (
    <audio ref={audioRef} src={url} controls={controls} onEnded={onEnded} />
  )
}
