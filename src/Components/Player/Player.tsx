import * as React from 'react'

import { Row, Col } from '../Grid'
import PlayCube from './PlayCube'

export default function Player(): JSX.Element {
  return (
    <div className="player-cube">
      <Row>
        <Col span={5}>
          <PlayCube />
        </Col>
        <Col />
      </Row>
    </div>
  )
}
