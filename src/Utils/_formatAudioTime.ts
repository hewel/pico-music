const formatAudioTime = (time: number): string => {
    function formatUnits(num: number): string {
        return num < 10 ? `0${num}` : `${num}`
    }
    if (Number.isNaN(time)) {
        return '00:00'
    }
    const [hour, minute, second] = [
        formatUnits(Math.floor(time / 3600)),
        formatUnits(
            time < 3600 ? Math.floor(time / 60) : Math.floor((time % 3600) / 60)
        ),
        formatUnits(Math.floor(time % 60)),
    ]
    return time < 3600 ? `${minute}:${second}` : `${hour}:${minute}:${second}`
}
export default formatAudioTime
