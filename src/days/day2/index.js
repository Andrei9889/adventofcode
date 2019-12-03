import { opcode } from './day2-1'

const INDICATORS = {
  ADD: 1,
  MULTIPLY: 2,
  FINISH: 99
}

// const test = [1,1,1,4,99,5,6,0,99]

export function day2() {

  let result = [...opcode]
  result[1] = 12
  result[2] = 2
  console.log(result)

  function replacePoints(){
    for(let i = 0; i < result.length; i = i+4){
      switch(result[i]){
        case INDICATORS.ADD: 
          let addFirst = result[i+1]
          let addSecond = result[i+2]
          let summ = result[addFirst] + result[addSecond]
          let newAddPlace = result[i+3]
          result[newAddPlace] = summ
          break
        case INDICATORS.MULTIPLY: 
          let multFirst = result[i+1]
          let multSecond = result[i+2]
          let multiply = result[multFirst] * result[multSecond]
          let newMultPlace = result[i+3]
          result[newMultPlace] = multiply
          break
        default: 
          return result
      }
    }
  }

  let resultArray = replacePoints()

  console.log('result: ', resultArray)
}
