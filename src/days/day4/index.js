const rangeFrom = 171309
const rangeTo = 643603
// const rangeFrom = 1713
// const rangeTo = 6436

export function day4() {
  let passwordss = wrapperFindPassword(rangeFrom, rangeTo)
  console.log(passwordss)

  // let result = doulbe(177309)
  // console.log(result)
}


let doulbe = (number) => {
  let str = number + ''
  let array = str.split('')
  let result = false

  array.forEach((char, i, arr)=>{
    if(i === 0) return
    if(arr[i] === arr[i-1]) result = true
  })

  return result
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
      // console.log('firstResult: ',firstResult)
      // debugger
      if(firstResult) { 
        // console.log('i', i)
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

        // console.log('+newStart: ', +newStart)
        // debugger
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


//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
// const range_start = 171309
// const range_end = 643603


// let count = 0;
// let arro = []
// for (let n = range_start; n <= range_end; n++) {
// 	let n_str = String(n);

// 	const has_double_digit = /(\d)\1/.test(n_str);
// 	if (!has_double_digit) {
// 		// Skip checking for increasing digits, we already have a failure
// 		continue;
// 	}

//   let n_arr = n_str.split('').map(v => +v);
//   const all_increasing_digits = n_arr.every((c, i, a) => {
//     return i === a.length - 1 ? true : c <= a[i + 1]
//   }
    
// 	);

// 	// If we are here, we know we have a double digit
// 	if (all_increasing_digits) {
//     arro.push(n)
//     count++;
// 	}
// }

// console.log(count);
// console.log(JSON.stringify(arro));
