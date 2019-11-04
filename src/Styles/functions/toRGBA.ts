/* eslint-disable no-bitwise */
import { splitEvery } from 'ramda'

const toRGBA = (hex: string, opacity: number): string => {
    const isAlpha = opacity >= 0

    const RGB = splitEvery(2, hex.slice(1))
        .map(s => parseInt(s, 16))
        .join(', ')
    return `rgb${isAlpha ? 'a' : ''}(${RGB}${isAlpha ? `, ${opacity}` : ''})`
}

export default toRGBA
