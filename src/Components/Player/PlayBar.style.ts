import { css } from '@emotion/core'

import { black, grey } from '../../Styles/variables'
import { calcSpan } from '../../Styles/functions'
import { setCard, iconWarp, flexCenter } from '../../Styles/mixins'

export const playBarWarp = css`
  ${setCard};
  display: flex;
  align-items: center;
  height: 72px;
`
export const playListIcon = css`
  ${iconWarp};
  width: 64px;
  height: 100%;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: ${black};
  }
`
export const songInfo = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${calcSpan()(3)}px;
  height: 48px;
  padding: 4px 12px 8px 0;
`
export const songName = css`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 8px;
`
export const artistName = css`
  font-size: 12px;
  color: ${grey};
  font-weight: 300;
`

export const progress = css`
  display: flex;
  align-items: center;
`
export const timeText = css`
  ${flexCenter};
`
export const moreIcon = css`
  ${iconWarp};
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: ${black};
  }
`
