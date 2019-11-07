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

import Audio from '../Audio'
import SongContent from './SongContent'
import PlayControlContext from './PlayControlContext'

import { primaryColors } from '../../Styles/variables'
import { psyShadow } from '../../Styles/mixins'
import { controlWarp, controlIconWarp, playIconWarp } from './PlayControl.style'

const { useState, useEffect, useCallback, useContext } = React

type IconClick = ((event?: React.MouseEvent<HTMLElement>) => void) | undefined

interface ClickMethod {
  repeat?: IconClick
  rewind?: IconClick
  play?: IconClick
  forward?: IconClick
  volume?: IconClick
}

interface IconData {
  name: string
  component: SvgIconComponent
}

export default function PlayControl(): JSX.Element {
  const { url } = useContext(SongContent)

  const { onPlay } = useContext(PlayControlContext)

  const [playControlIcons, setPlayControlIcons] = useState<IconData[]>([
    { name: 'repeat', component: RepeatRounded },
    { name: 'rewind', component: FastRewindRounded },
    { name: 'play', component: PlayArrowRounded },
    { name: 'forward', component: FastForwardRounded },
    { name: 'volume', component: VolumeUpRounded },
  ])

  const [repeatIcon, setRepeatIcon] = useState<SvgIconComponent>(RepeatRounded)
  const [volumeIcon, setVolumeIcon] = useState<SvgIconComponent>(
    VolumeUpRounded
  )

  const [paused, setPaused] = useState(true)
  const handlePlayClick = useCallback(
    (event: React.MouseEvent<HTMLElement>): void => {
      event.preventDefault()
      setPaused(prevPaused => {
        const isPaused = !prevPaused
        if (onPlay) {
          onPlay(isPaused)
        }
        return isPaused
      })
    },
    [onPlay]
  )

  useEffect(() => {
    setPlayControlIcons([
      { name: 'repeat', component: RepeatRounded },
      { name: 'rewind', component: FastRewindRounded },
      { name: 'play', component: paused ? PlayArrowRounded : PauseRounded },
      { name: 'forward', component: FastForwardRounded },
      { name: 'volume', component: VolumeUpRounded },
    ])
  }, [paused])

  const iconClicks: ClickMethod = {
    play: handlePlayClick,
  }

  return (
    <div className="play-control" css={controlWarp}>
      {url && (
        <div
          css={css`
            position: absolute;
            top: -300px;
          `}
        >
          <Audio url={url} paused={paused} precision={1000} />
        </div>
      )}
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
            <span onClick={iconClicks[icon.name]} css={iconStyle}>
              <Component fontSize="inherit" />
            </span>
          </div>
        )
      })}
    </div>
  )
}
