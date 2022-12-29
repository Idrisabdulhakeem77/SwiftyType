import coefficientOfVariation from "./coefficientOfVariation";


const kogasa = (arr: number[]): number => {
    const cov = coefficientOfVariation(arr);
    return 100 * (1 - Math.tanh(cov + Math.pow(cov, 3) / 3 + Math.pow(cov, 5) / 5))



}

export default kogasa