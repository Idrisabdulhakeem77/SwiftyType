import mean from './mean'

const StandardDeviation = (arr: number[]): number => {
    const meanValue = mean(arr)

    return Math.sqrt(arr.reduce((a, b) => {
        return a + Math.pow(b - meanValue, 2)
    }, 0) / arr.length)
}

export default StandardDeviation
