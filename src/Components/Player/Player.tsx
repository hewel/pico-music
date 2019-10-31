import * as React from 'react'
import { css } from '@emotion/core'

import { Row, Col } from '../Grid'

export default function Player(): JSX.Element {
  return (
    <Row>
      <Col span={5}>
        <div
          css={css`
            box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.16);
          `}
        >
          5
        </div>
      </Col>
      <Col />
    </Row>
  )
}
