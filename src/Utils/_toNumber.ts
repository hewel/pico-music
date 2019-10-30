export default function toNumber(value: string | number | boolean): number {
    if (typeof value === 'number') {
        if (Number.isNaN(value)) {
            return 0
        }
    }
    return Number(value)
}
