const rangeFrom = 171309
const rangeTo = 643603

export function day4() {
  let passwordss = wrapperFindPassword(rangeFrom, rangeTo)
  console.log(passwordss)

}

let doulbe = (number) => {
  let str = number + ''
  let array = str.split('')

  let twoInRow = 0
  let threeInRow = 0

  array.forEach((char, i, arr)=>{
    if(i === 0) return
    if(arr[i] === arr[i-1]) {
      twoInRow++
    }
    if(arr[i] === arr[i-1] && arr[i] === arr[i-2]) {
      threeInRow++
    }
  })

  // if(threeInRow && twoInRow && )

  return false
}

let moreOrEqual = (number) => {
  let str = number + ''
  let array = str.split('')
  let result = false

  array.forEach((char, i, arr)=>{
    if(i === 0) return
    if(+arr[i] < +arr[i-1]) result = i
  })
  return result
}

let wrapperFindPassword = (start, end) => {

  let passwords = []
  
  let findPassword = (start, end ) => {
  
    for(let i = start; i <= end; i++){
      let firstResult = moreOrEqual(i)
      if(firstResult) { 
        let arrayInside = i.toString().split('')
        let newArrayInside = arrayInside.map((e,ind, arrar)=>{
          if(ind === firstResult) return arrar[ind-1]
          if(ind - 1 === firstResult) return arrar[ind-1]
          return e
        })
        let newStart = ''
        newArrayInside.forEach((e)=>{
          newStart = newStart + e
        })

        return findPassword(+newStart , end)
      }
  
      let secondResult = doulbe(i)
  
      if(secondResult) {
        passwords.push(i)
      }
    }
  }

  findPassword(start, end)
  return passwords
}