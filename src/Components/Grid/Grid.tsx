import * as React from 'react'
import { css } from '@emotion/core'

import RowContext from './GridContext'

import { picoRow, picoCol } from './Grid.style'
import { setAlign, setJustify, calcSpan } from '../../Styles/mixins'
import { gutter as defGutter, column } from '../../Styles/variables'

interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: string
  justify?: string
  gutter?: number
}

interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
  span?: number
}

export function Row(props: RowProps): JSX.Element {
  const { children, gutter = defGutter, align, justify, ...otherProps } = props

  const rowStyle = css`
    ${picoRow};
    ${setAlign(align)};
    ${setJustify(justify)};
    margin-top: -${gutter}px;
    margin-left: -${gutter}px;
    margin-right: -${gutter}px;
    margin-bottom: -${gutter}px;
    &:not(:last-child) {
      margin-bottom: 0;
    }
  `

  return (
    <RowContext.Provider value={gutter}>
      <div css={rowStyle} {...otherProps}>
        {children}
      </div>
    </RowContext.Provider>
  )
}
export function Col(props: ColProps): JSX.Element {
  const { children, span, ...otherProps } = props
  const gutter = React.useContext(RowContext)
  const width = span ? `${calcSpan(column, gutter)(span)}px` : ''

  const colStyle = css`
    ${picoCol};
    flex: ${span ? 'none' : ''};
    width: ${width};
    padding: ${gutter}px;
  `
  return (
    <div css={colStyle} {...otherProps}>
      {children}
    </div>
  )
}
