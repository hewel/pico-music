import { css } from '@emotion/core'

import { bodyBgc } from '../Styles/variables'
import { fontFamily } from '../Styles/global/font.style'

export const globalStyle = css`
  html {
    box-sizing: border-box;
  }
  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }
  body {
    ${fontFamily};
    background-color: ${bodyBgc};
  }
`

export const appStyle = css`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: auto;
`
