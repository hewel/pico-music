import { css } from '@emotion/core'

import { black, grey } from '../../Styles/variables'
import { setCard, iconWarp } from '../../Styles/mixins'

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
  height: 48px;
  padding: 4px 4px 8px 0;
`
export const songName = css`
  font-size: 16px;
  font-weight: 400;
`
export const artistName = css`
  font-size: 12px;
  color: ${grey};
  font-weight: 300;
`
