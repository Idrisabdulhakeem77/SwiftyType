const mean = (arr: number[] ) : number => {

    return arr.reduce((a, b) => a + b) / arr.length
}

export default mean