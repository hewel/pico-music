import * as React from 'react'
import { QueueMusicRounded } from '@material-ui/icons'

import {
  playBarWarp,
  playListIcon,
  songInfo,
  songName,
  artistName,
} from './PlayBar.style'

export default function PlayBar(): JSX.Element {
  return (
    <div css={playBarWarp}>
      <div css={playListIcon}>
        <QueueMusicRounded fontSize="inherit" />
      </div>
      <div css={songInfo}>
        <span css={songName}>Young And Menace</span>
        <span css={artistName}>Fall Out Boy</span>
      </div>
    </div>
  )
}
