import * as React from 'react'
import { QueueMusicRounded, MoreHorizRounded } from '@material-ui/icons'

import { Row, Col } from '../Grid'
import Slider from '../Slider'

import SongContent from './SongContent'

import { Align, flexCenter } from '../../Styles/mixins'

import {
  playBarWarp,
  playListIcon,
  songInfo,
  songName,
  artistName,
  progress,
  timeText,
  moreIcon,
} from './PlayBar.style'

import formatAudioTime from '../../Utils/_formatAudioTime'

interface PlayBarProps {
  progressValue: number
  timeGroup: [number, number]
}

export default function PlayBar(props: PlayBarProps): JSX.Element {
  const { progressValue = 0, timeGroup = [0, 0] } = props
  const { name, artist } = React.useContext(SongContent)

  return (
    <div css={playBarWarp}>
      <div css={playListIcon}>
        <QueueMusicRounded fontSize="inherit" />
      </div>
      <div css={songInfo}>
        <span css={songName}>{name}</span>
        <span css={artistName}>
          {artist && artist.map(({ name: arName }) => arName).join('&')}
        </span>
      </div>
      <div className="progressWarp">
        <Row align={Align.middle}>
          <Col className="currentTime" span={1} css={timeText}>
            {formatAudioTime(timeGroup[0])}
          </Col>
          <Col className="progress" span={12} css={progress}>
            <Slider height={8} value={progressValue} max={100} />
          </Col>
          <Col className="duration" span={1} css={timeText}>
            {formatAudioTime(timeGroup[1])}
          </Col>
        </Row>
      </div>
      <Col className="more" span={1} css={flexCenter}>
        <span css={moreIcon}>
          <MoreHorizRounded fontSize="inherit" />
        </span>
      </Col>
    </div>
  )
}
