import { css, SerializedStyles } from '@emotion/core'

import { primaryColors, whites } from '../../Styles/variables'
import { psyShadow } from '../../Styles/mixins'

export const sliderWarp = (
  color: string = primaryColors[0],
  height = 2
): SerializedStyles => css`
  color: ${color};
  width: 100%;
  cursor: pointer;
  height: ${height}px;
  display: inline-block;
  padding: 11px 0;
  position: relative;
  box-sizing: content-box;
  touch-action: none;
  -webkit-tap-highlight-color: transparent;
`
export const sliderRail = (height = 2): SerializedStyles => css`
  width: 100%;
  height: ${height}px;
  display: block;
  position: absolute;
  border-radius: 100px;
  background-color: ${whites[4]};
`
export const sliderTrack = (height = 2): SerializedStyles => css`
  height: ${height}px;
  display: block;
  position: absolute;
  border-radius: 100px;
  background-color: currentColor;
  ${psyShadow};
`
export const trackMove = (percent: number): SerializedStyles => css`
  width: ${percent && `${percent}%`};
`
export const handle = css``
