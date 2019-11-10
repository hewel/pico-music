/* eslint-disable react/no-array-index-key */
import * as React from 'react'
import { css } from '@emotion/core'

import { Slider, Paper, Grow } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
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

import PlayConfigContext from './PlayConfigContext'
import SongContent from './SongContent'
import PlayControlContext from './PlayControlContext'

import { primaryColors, black } from '../../Styles/variables'
import { toRGBA } from '../../Styles/functions'
import { psyShadow } from '../../Styles/mixins'
import { controlWarp, controlIconWarp, playIconWarp } from './PlayControl.style'

const { useState, useEffect, useCallback, useContext, useMemo } = React

const VolumeSlider = withStyles(() => {
  const color = primaryColors[0]
  const shadow = (spread: number): string =>
    `0px 0px 0px ${spread}px ${toRGBA(color, 0.16)};`

  return {
    colorPrimary: {
      color,
    },
    thumb: {
      '&:hover, &.Mui-focusVisible': {
        'box-shadow': shadow(8),
      },
      '&.MuiSlider-active': {
        'box-shadow': shadow(14),
      },
    },
  }
})(Slider)

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
  iconElement: SvgIconComponent
  activated?: boolean
  children?: JSX.Element
}

export default function PlayControl(): JSX.Element {
  const { interval } = useContext(PlayConfigContext)
  const { url } = useContext(SongContent)
  const { onPlay, onTimeupdate } = useContext(PlayControlContext)

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

  const [volume, setVolume] = useState(30)
  const [shouldVolumeShow, setShouldVolumeShow] = useState(false)

  const volumeChildren = useMemo(() => {
    const volumeOnChange = (
      _event: React.ChangeEvent<{}>,
      value: number
    ): void => {
      setVolume(value)
    }
    return (
      <Grow in={shouldVolumeShow}>
        <Paper
          css={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            position: absolute;
            bottom: 64px;
            right: 16px;
            box-sizing: content-box;
            min-width: 32px;
            padding: 16px 8px 12px 8px;
          `}
          elevation={2}
        >
          <div
            css={css`
              height: 64px;
              margin-bottom: 8px;
            `}
          >
            <VolumeSlider
              defaultValue={30}
              value={volume}
              orientation="vertical"
              onChange={volumeOnChange}
            />
          </div>
          <span>{volume}</span>
        </Paper>
      </Grow>
    )
  }, [shouldVolumeShow, volume])

  const handleVolumeClick = (): void => setShouldVolumeShow(show => !show)

  const VolumeIcon = useMemo(() => {
    if (volume > 50) {
      return VolumeUpRounded
    }
    if (volume > 10) {
      return VolumeDownRounded
    }
    if (volume > 0) {
      return VolumeMuteRounded
    }
    return VolumeOffRounded
  }, [volume])

  const offPaper = useCallback(() => {
    setShouldVolumeShow(false)
  }, [])

  const playControlIcons = useMemo(
    () => [
      { name: 'repeat', iconElement: RepeatRounded },
      { name: 'rewind', iconElement: FastRewindRounded },
      { name: 'play', iconElement: paused ? PlayArrowRounded : PauseRounded },
      { name: 'forward', iconElement: FastForwardRounded },
      {
        name: 'volume',
        iconElement: VolumeIcon,
        children: volumeChildren,
        activated: shouldVolumeShow,
      },
    ],
    [VolumeIcon, paused, shouldVolumeShow, volumeChildren]
  )

  const iconClicks = useMemo<ClickMethod>(
    () => ({
      play: handlePlayClick,
      volume: handleVolumeClick,
    }),
    [handlePlayClick]
  )

  const handleAudioEnd = useCallback(() => {
    setPaused(true)
  }, [])

  return (
    <>
      {url && (
        <div
          css={css`
            visibility: hidden;
          `}
        >
          <Audio
            url={url}
            paused={paused}
            interval={interval}
            volume={volume}
            onTimeupdate={onTimeupdate}
            onEnded={handleAudioEnd}
          />
        </div>
      )}
      <div className="play-control" css={controlWarp} onMouseLeave={offPaper}>
        {playControlIcons.map((icon, index) => {
          const { iconElement: Icon, children, activated } = icon

          const isPlayIcon = index === 2
          const isSide = index === 0 || index === playControlIcons.length - 1

          const iconWarpStyle = isPlayIcon
            ? playIconWarp
            : css`
                ${controlIconWarp};
                font-size: ${isSide ? 16 : 24}px;
                color: ${activated && black};
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
                <Icon fontSize="inherit" />
              </span>
              {children}
            </div>
          )
        })}
      </div>
    </>
  )
}
