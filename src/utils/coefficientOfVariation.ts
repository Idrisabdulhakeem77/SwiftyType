import StandardDeviation from "./standardDeviation"
import mean from "./mean"


const coefficientOfVariation = ( arr : number[]) : number  => {
      return StandardDeviation(arr) / mean(arr)
}

export default coefficientOfVariation