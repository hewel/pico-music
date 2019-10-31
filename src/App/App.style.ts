import { css } from '@emotion/core'

import { bodyBgc } from '../Styles/variables'
import { calcSpan } from '../Styles/mixins'
import { fontFamily } from '../Styles/global/font.style'

const appWidth = calcSpan()(24)

export const globalStyle = css`
  body {
    ${fontFamily};
    background-color: ${bodyBgc};
  }
`

export const appStyle = css`
  width: ${appWidth}px;
  margin: 0 auto;
`
