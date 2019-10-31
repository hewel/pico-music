import { css } from '@emotion/core'
import { clamp } from 'ramda'

import {
    gutter as defGutter,
    column as defColumn,
    componentBgc,
    cardBorderRadius,
} from '../variables'

export const setAlign = (align?: string) => {
    const aligns = {
        top: 'flex-start',
        middle: 'center',
        bottom: 'flex-end',
    }
    const alignItems: string = align ? aligns[align] : ''

    return css`
        align-items: ${alignItems};
    `
}

export const setJustify = (justify?: string) => {
    const justifies = {
        start: 'flex-start',
        end: 'flex-end',
        center: 'center',
        around: 'space-around',
        between: 'space-between',
    }
    const justifyContent = justify ? justifies[justify] : ''

    return css`
        justify-content: ${justifyContent};
    `
}

export const calcSpan = (
    column: number = defColumn,
    gutter: number = defGutter
) => (span: number = 1) => {
    const spanNumber = clamp(1, 24)(span)
    return spanNumber === 1
        ? column + gutter
        : column * spanNumber + gutter * (spanNumber - 1)
}

export const setCard = css`
    background-color: ${componentBgc};
    border-radius: ${cardBorderRadius}px;
    box-shadow: 0 3.2px 7.2px 0 rgba(0, 0, 0, 0.132),
        0 0.6px 1.8px 0 rgba(0, 0, 0, 0.108);
`
