import _ from 'lodash'


export function day3() {
  const firstLine = ['R75','D30','R83','U83','L12','D49','R71','U7','L72']
  const secondLine = ['U62','R66','U55','R34','D71','R55','D58','R83']

  const getCoordinates = (line) => {
    let x = 0
    let y = 0
    let result = []
    line.forEach((step)=>{
      switch(step[0]){
        case 'U':
            x += +step.slice(1)
          break
        case 'R':
            y += +step.slice(1)
          break
        case 'D':
            x -= +step.slice(1)
          break
        case 'L':
            y -= +step.slice(1)
          break
        default: return null 
      }

      result.push([x,y])
    })
    return result
  }  

  console.log(getCoordinates(firstLine))

  console.log(_.intersection([1,2], [4,2]))
}
