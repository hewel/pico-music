import * as React from 'react'
import { css } from '@emotion/core'

import { PrimaryButton } from 'office-ui-fabric-react/lib/Button'

import toNumber from '../Utils/_toNumber'
import Audio from '../Components/Audio'

import 'normalize.css'

const { useState } = React

export default function App(): JSX.Element {
  const [audioPaused, setAudioPaused] = useState(true)

  const handleBtnClick = (): void => {
    setAudioPaused(value => !value)
  }
  const [timeGroup, setTimeGroup] = useState([0, 0])
  const handleAudioTimeUpdate = (currentTime: number, duration: number): void => {
    setTimeGroup([currentTime, duration])
  }

  const timePermillage = Math.floor(toNumber(timeGroup[0] / timeGroup[1]) * 10000)

  return (
    <div className="app">
      <Audio
        url="http://m7.music.126.net/20191030033014/35793d8dc114ce1443da0e622f1cfa57/ymusic/6459/8c8f/b4d3/ed2316edf3c8d29606382f6b5f79cffb.flac"
        paused={audioPaused}
        onTimeupdate={handleAudioTimeUpdate}
      />
      <p>
        <PrimaryButton onClick={handleBtnClick}>{audioPaused ? 'Play' : 'Pause'}</PrimaryButton>
      </p>
      <span>{timePermillage}</span>
      <div
        className="progress"
        css={css`
          position: relative;
          width: 800px;
          height: 10px;
          background-color: #eee;
        `}
      >
        <span
          css={css`
            display: block;
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            background-color: #252525;
            transform: scale3d(0.5, 1, 1);
            transform-origin: left;
          `}
          style={{
            transform: `scale3d(${timePermillage / 10000}, 1, 1)`,
          }}
        />
      </div>
    </div>
  )
}
