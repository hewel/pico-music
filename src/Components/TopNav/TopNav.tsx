import * as React from 'react'
import { css } from '@emotion/core'

import { Row, Col } from '../Grid'

import { column, marginSm } from '../../Styles/variables'
import { setCard, Align, setContainer } from '../../Styles/mixins'

export default function TopNav(): JSX.Element {
  const topNavStyle = css`
    ${setCard};
    ${setContainer()};
    display: flex;
    height: ${column}px;
    margin-bottom: ${marginSm}px;
  `
  return (
    <header css={topNavStyle}>
      <Row align={Align.middle}>
        <Col span={1}>avatar</Col>
        <Col span={4}>avatar</Col>
      </Row>
    </header>
  )
}
