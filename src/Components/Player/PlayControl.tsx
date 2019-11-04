/* eslint-disable react/no-array-index-key */
import * as React from 'react'
import { css } from '@emotion/core'
import {
  RepeatRounded,
  ShuffleRounded,
  RepeatOneRounded,
  FastRewindRounded,
  FastForwardRounded,
  VolumeUpRounded,
  VolumeDownRounded,
  VolumeMuteRounded,
  VolumeOffRounded,
  PlayArrowRounded,
  PauseRounded,
  SvgIconComponent,
} from '@material-ui/icons'

import { primaryColors } from '../../Styles/variables'
import { psyShadow } from '../../Styles/mixins'
import { controlWarp, controlIconWarp, playIconWarp } from './PlayControl.style'

const { useState } = React

interface IconList {
  name: string
  component: SvgIconComponent
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
}

export default function PlayControl(): JSX.Element {
  const [playControlIcons, setPlayControlIcons] = useState<IconList[]>([
    { name: 'repeat', component: RepeatRounded },
    { name: 'rewind', component: FastRewindRounded },
    { name: 'play', component: PlayArrowRounded },
    { name: 'forward', component: FastForwardRounded },
    { name: 'volume', component: VolumeUpRounded },
  ])
  return (
    <div className="play-control" css={controlWarp}>
      {playControlIcons.map((icon, index) => {
        const Component = icon.component

        const isPlayIcon = index === 2
        const isSide = index === 0 || index === playControlIcons.length - 1

        const iconWarpStyle = isPlayIcon
          ? playIconWarp
          : css`
              ${controlIconWarp};
              font-size: ${isSide ? 16 : 24}px;
            `
        const iconStyle = css`
          display: flex;
          justify-content: center;
          align-items: center;
          padding: ${isPlayIcon ? '' : '4px'};
          margin: ${isSide ? '-4px' : ''};
          ${isPlayIcon &&
            css`
              background-color: ${primaryColors[0]};
              border-radius: 100%;
              ${psyShadow};
            `}
        `

        return (
          <div key={icon.name} css={iconWarpStyle}>
            <span onClick={icon.onClick} css={iconStyle}>
              <Component fontSize="inherit" />
            </span>
          </div>
        )
      })}
    </div>
  )
}
