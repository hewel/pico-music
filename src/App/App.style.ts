import { css } from '@emotion/core'

import { bodyBgc, black } from '../Styles/variables'
import { setContainer } from '../Styles/mixins'
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
    color: ${black};
  }
`

export const appStyle = css`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: auto;
`
export const containerStyle = css`
  ${setContainer()};
  /* display: flex; */
  /* align-items: flex-start; */
  height: 100%;
`
