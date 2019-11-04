import { clamp } from 'ramda'
import { gutter as defGutter, column as defColumn } from '../variables'

const calcSpan = (column: number = defColumn, gutter: number = defGutter) => (
    span = 1
): number => {
    const spanNumber = clamp(1, 24)(span)
    return spanNumber === 1
        ? column + gutter
        : column * spanNumber + gutter * spanNumber
}

export default calcSpan
