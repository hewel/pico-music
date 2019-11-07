import * as React from 'react'
import { sliderWarp, sliderRail, sliderTrack, trackMove } from './Slider.style'

interface SliderProps {
  height?: number
  color?: string
  value?: number
  max?: number
}

export default function Slider(props: SliderProps): JSX.Element {
  const { height = 2, color, value = 0, max = 100 } = props

  return (
    <div className="sliderWarp" css={sliderWarp(color, height)}>
      <span className="rail" css={sliderRail(height)} />
      <span
        className="track"
        css={[sliderTrack(height), trackMove((value / max) * 100)]}
      />
    </div>
  )
}
