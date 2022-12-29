

const accuracy = (error: number, characters: number): number => {
    return Math.max((1 - error / characters) * 100, 0)
}

export default accuracy