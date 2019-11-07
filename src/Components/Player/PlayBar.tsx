import * as React from 'react'
import { QueueMusicRounded, MoreHorizRounded } from '@material-ui/icons'

import { Row, Col } from '../Grid'
import Slider from '../Slider'

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
      <div className="progressWarp">
        <Row align={Align.middle}>
          <Col className="currentTime" span={1} css={timeText}>
            1:03
          </Col>
          <Col className="progress" span={12} css={progress}>
            <Slider height={8} value={10} />
          </Col>
          <Col className="duration" span={1} css={timeText}>
            4:26
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
