import { css, SerializedStyles } from '@emotion/core'

import {
    componentBgc,
    cardBorderRadius,
    primaryColors,
    grey,
} from '../variables'
import { calcSpan, toRGBA } from '../functions'

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

export const flexCenter = css`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const setCard = css`
    background-color: ${componentBgc};
    border-radius: ${cardBorderRadius}px;
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1),
        0 0.2px 6px 0 rgba(0, 0, 0, 0.06);
`
export const psyShadow = css`
    box-shadow: 0 2px 6px 0 ${toRGBA(primaryColors[0], 0.4)},
        0 4px 8px 0 ${toRGBA(primaryColors[0], 0.08)};
`

export const setContainer = (
    width: number = calcSpan()(24)
): SerializedStyles => css`
    flex-grow: 1;
    max-width: ${width}px;
    width: auto;
    margin: 0 auto;
`

export const setImage = (
    fit?: string,
    size?: [number, number]
): SerializedStyles => {
    const width = size && `${size[0]}px`
    const height = size && `${size[1]}px`

    return css`
        display: flex;
        width: ${width};
        height: ${height};
        & > img {
            width: 100%;
            height: 100%;
            object-fit: ${fit};
        }
    `
}

export const iconWarp = css`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    color: ${grey};
    transition: 0.2s color ease-in-out;
`
