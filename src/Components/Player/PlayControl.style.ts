import { css } from '@emotion/core'

import { black, whites } from '../../Styles/variables'
import { iconWarp } from '../../Styles/mixins'

const controlWarp = css`
  display: flex;
  align-items: stretch;
  height: 72px;
`

const controlIconWarp = css`
  ${iconWarp};
  flex: 1;
  margin-right: 12px;
  cursor: pointer;
  &:first-of-type {
    justify-content: flex-end;
  }
  &:last-child {
    margin-right: 0;
    justify-content: flex-start;
  }
  &:hover {
    color: ${black};
  }
`
const playIconWarp = css`
  ${controlIconWarp};
  font-size: 48px;
  color: ${whites[1]};
  &:hover {
    color: ${whites[0]};
  }
`

const playButton = css``

export { controlWarp, controlIconWarp, playIconWarp, playButton }
