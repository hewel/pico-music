import * as React from 'react'
import { css } from '@emotion/core'

import AlbumCover from './AlbumCover'
import PlayControl from './PlayControl'

import { setCard } from '../../Styles/mixins'

export default function PlayCube(): JSX.Element {
  const cubeStyle = css`
    ${setCard};
    overflow: hidden;
  `
  return (
    <div className="play-cube" css={cubeStyle}>
      <AlbumCover />
      <PlayControl />
    </div>
  )
}
