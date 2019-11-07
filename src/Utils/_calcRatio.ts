import toNumber from './_toNumber'

export default function calcRatio(
    valueGroup: number[],
    precision: number
): number {
    return Math.floor(toNumber(valueGroup[0] / valueGroup[1]) * precision)
}
