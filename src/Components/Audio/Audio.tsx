import * as React from 'react'

import calcRatio from '../../Utils/_calcRatio'

const { useState, useRef, useEffect, useCallback } = React

interface AudioProps {
  className?: string
  url: string
  paused?: boolean
  precision?: number
  onPlayStateChange?: (paused: boolean) => void
  onTimeupdate?: (timeGroup: [number, number], timeRatio: number) => void
  onEnded?: (event: React.SyntheticEvent<HTMLAudioElement, Event>) => void
}

export default function Audio(props: AudioProps): JSX.Element {
  const {
    url,
    paused = false,
    precision = 100,
    onPlayStateChange,
    onTimeupdate,
    onEnded,
  } = props

  const audioRef = useRef(document.createElement('audio'))
  const intervalRef = useRef(0)
  const [, setTimeGroup] = useState([0, 0])

  const updateTime = useCallback(() => {
    if (onTimeupdate) {
      const { currentTime, duration } = audioRef.current
      const valueGroup: [number, number] = [currentTime, duration]

      intervalRef.current = window.requestAnimationFrame(updateTime)

      setTimeGroup(prevValue => {
        const isFloor =
          calcRatio(valueGroup, precision) - calcRatio(prevValue, precision) >=
            1 ||
          calcRatio(prevValue, precision) - calcRatio(valueGroup, precision) >=
            1
        if (isFloor) {
          onTimeupdate(valueGroup, calcRatio(valueGroup, precision))
        }
        if (currentTime === duration) {
          return [0, 0]
        }
        return isFloor ? valueGroup : prevValue
      })
    }
  }, [onTimeupdate, precision])

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
  }, [onPlayStateChange, paused, updateTime])

  return <audio ref={audioRef} src={url} controls onEnded={onEnded} />
}
