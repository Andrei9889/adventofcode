export function day3() {
  const firstLine = ['T5', 'R3', 'D4']
  const secondLine = ['R2', 'T4', 'R3']

  const getCoordinates = (line) => {
    let x = 0
    let y = 0
    let result = []
    line.forEach((step)=>{
      switch(step[0]){
        case 'T':
            y += +step.slice(1)
          break
        case 'R':
            x += +step.slice(1)
          break
        case 'D':
            y -= +step.slice(1)
          break
        case 'L':
            x -= +step.slice(1)
          break
        default: return null 
      }
      result.push([x,y])
    })
    return result
  }  
  

  let intersection = (X, Y) => {
    let a1 = X[0][1] - X[1][1]
    let b1 = X[1][0] - X[0][0]
    let a2 = Y[0][1] - Y[1][1]
    let b2 = Y[1][0] - Y[0][0]

    let d = a1 * b2 - a2 * b1

    console.log(a1, b1, a2, b2, d)

    if(d !== 0){
      let c1 = X[1][1] * X[0][0] - X[1][0] * X[0][1]
      let c2 = Y[1][1] * Y[0][0] - Y[1][0] * Y[0][1]

      
      let xi = (b1 * c2 - b2 * c1) / d
      let yi = (a2 * c1 - a1 * c2) / d;
      return [xi, yi]
    }
  }
  
  let red = getCoordinates(firstLine)
  let blue = getCoordinates(secondLine)

  console.log(intersection([[3,5], [3,1]], [[0,0],[2,0]]))


  // let arrayOfIntersections = []

  // blue.forEach((blueElem, blueIndex)=>{

  //   let blueEnd = blueElem
  //   let blueStart = blueIndex === 0 ? [0,0] : blue[blueIndex - 1]

  //   red.forEach((redElem, redIndex)=>{
  //     let redEnd = redElem
  //     let redStart = redIndex === 0 ? [0,0] : red[redIndex - 1]

  //     console.log([redStart, redEnd], [blueStart, blueEnd])

  //     let defined = intersection([redStart, redEnd], [blueStart, blueEnd])
  //     console.log(defined)
  //     // if(defined){
  //     //   arrayOfIntersections.push(defined)
  //     // }

  //     console.log('---------------------------')
  //   })
  // })

  // console.log(arrayOfIntersections)
  // let arrayOfDistances = arrayOfIntersections.map((coordinates)=>{
  //   return coordinates[0] + coordinates[1]
  // })

  // arrayOfDistances.sort()

  // console.log(arrayOfDistances)
  

}
