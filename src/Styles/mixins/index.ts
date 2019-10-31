import { css, SerializedStyles } from '@emotion/core'
import { clamp } from 'ramda'

import {
    gutter as defGutter,
    column as defColumn,
    componentBgc,
    cardBorderRadius,
} from '../variables'

export enum Align {
    top = 'flex-start',
    middle = 'center',
    bottom = 'flex-end',
}

export const setAlign = (align?: Align): SerializedStyles => {
    return css`
        align-items: ${align};
    `
}

export enum Justify {
    start = 'flex-start',
    end = 'flex-end',
    center = 'center',
    around = 'space-around',
    between = 'space-between',
}

export const setJustify = (justify?: Justify): SerializedStyles => {
    return css`
        justify-content: ${justify};
    `
}

export const calcSpan = (
    column: number = defColumn,
    gutter: number = defGutter
) => (span = 1): number => {
    const spanNumber = clamp(1, 24)(span)
    return spanNumber === 1
        ? column + gutter
        : column * spanNumber + gutter * (spanNumber - 1)
}

export const setCard = css`
    background-color: ${componentBgc};
    border-radius: ${cardBorderRadius}px;
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1),
        0 0.2px 8px 0 rgba(0, 0, 0, 0.06);
`
export const setContainer = (
    width: number = calcSpan()(24)
): SerializedStyles => css`
    width: ${width}px;
    margin: 0 auto;
`
