import * as React from 'react'
import { sliderWarp, sliderRail, sliderTrack } from './Slider.style'

import PlayConfigContext from '../Player/PlayConfigContext'

interface SliderProps {
  height?: number
  color?: string
  value?: number
  max?: number
}

export default function Slider(props: SliderProps): JSX.Element {
  const { height = 2, color, value = 0, max = 100 } = props
  const { interval } = React.useContext(PlayConfigContext)

  return (
    <div className="sliderWarp" css={sliderWarp(color, height)}>
      <span className="rail" css={sliderRail(height)} />
      <span
        className="track"
        css={sliderTrack(height, interval)}
        style={{ width: `${(value / max) * 100}%` }}
      />
    </div>
  )
}
