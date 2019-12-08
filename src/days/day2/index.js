import { opcode } from './day2-1'
import { tsConstructSignatureDeclaration } from '@babel/types'

const INDICATORS = {
  ADD: 1,
  MULTIPLY: 2,
  FINISH: 99
}

export function day2() {

  let result = [...opcode]
  // let result = [1,1,1,4,99,5,6,0,99]
  // result[1] = 12
  // result[2] = 2
  // console.log(result)

  function replacePoints(arrayOfInt1, noun = arrayOfInt1[1], verb = arrayOfInt1[2]){
    let arrayOfInt = [...arrayOfInt1]
    arrayOfInt[1] = noun
    arrayOfInt[2] = verb
    for(let i = 0; i < arrayOfInt.length; i = i+4){
      switch(arrayOfInt[i]){
        case INDICATORS.ADD: 
          let addFirst = arrayOfInt[i+1]
          let addSecond = arrayOfInt[i+2]
          let summ = arrayOfInt[addFirst] + arrayOfInt[addSecond]
          let newAddPlace = arrayOfInt[i+3]
          arrayOfInt[newAddPlace] = summ
          break
        case INDICATORS.MULTIPLY: 
          let multFirst = arrayOfInt[i+1]
          let multSecond = arrayOfInt[i+2]
          let multiply = arrayOfInt[multFirst] * arrayOfInt[multSecond]
          let newMultPlace = arrayOfInt[i+3]
          arrayOfInt[newMultPlace] = multiply
          break
        default: 
          return arrayOfInt
      }
    }
  }

  // console.log(replacePoints(result, 12, 2))

  let findNounAndVerb = (array) => {  
    let noun = -1
    let verb = 0
    let newArray = []

    do{
      newArray = [...array]
      noun++
      if(noun === 100){
        verb++
        noun = 0
      }
      if(verb === 100){
        return
      }

      newArray[1] = noun
      newArray[2] = verb

      newArray = replacePoints(array, noun, verb)
    } while (newArray[0] !== 19690720)
    
    return newArray
  }

  let inTheEnd = findNounAndVerb(result)

  console.log(100 * inTheEnd[1] + inTheEnd[2])

}
