import * as React from 'react'
import { css } from '@emotion/core'

import { Row, Col } from '../Grid'
import PlayCube from './PlayCube'
import PlayBar from './PlayBar'

import { setContainer, Align } from '../../Styles/mixins'
import { marginSm } from '../../Styles/variables'

export default function Player(): JSX.Element {
  return (
    <div
      className="player-warp"
      css={css`
        ${setContainer()};
        position: fixed;
        bottom: ${marginSm}px;
        left: 50%;
        transform: translateX(-50%);
      `}
    >
      <Row align={Align.bottom}>
        <Col span={5}>
          <PlayCube />
        </Col>
        <Col span={19}>
          <PlayBar />
        </Col>
      </Row>
    </div>
  )
}
