import { firstLine, secondLine } from './day3-1';

export function day3() {
  // let firstArray = firstLine.split(',');
  // let secondArray = secondLine.split(',');

  // const getCoordinates = line => {
  //   let x = 0;
  //   let y = 0;
  //   let result = [];
  //   line.forEach(step => {
  //     switch (step[0]) {
  //       case 'U':
  //         for (let z = 1; z <= +step.slice(1); z++) {
  //           y++;
  //           result.push([x, y]);
  //         }
  //         break;
  //       case 'R':
  //         for (let z = 1; z <= +step.slice(1); z++) {
  //           x++;
  //           result.push([x, y]);
  //         }
  //         break;
  //       case 'D':
  //         for (let z = 1; z <= +step.slice(1); z++) {
  //           y--;
  //           result.push([x, y]);
  //         }
  //         break;
  //       case 'L':
  //         for (let z = 1; z <= +step.slice(1); z++) {
  //           x--;
  //           result.push([x, y]);
  //         }
  //         break;
  //       default:
  //         return null;
  //     }

  //   });
  //   return result;
  // };

  // let red = getCoordinates(firstArray);
  // let blue = getCoordinates(secondArray);

  // console.log(red);
  // console.log(blue);

  // let intersections = [];

  // red.forEach(redPixel => {
  //   blue.forEach(bluePixel => {
  //     if (redPixel[0] === bluePixel[0] && redPixel[1] === bluePixel[1]) {
  //       intersections.push(redPixel);
  //     }
  //   });
  // });

  // // console.log(intersections)

  // let summOfCoordinates = intersections.map(pixel => {
  //   return Math.abs(pixel[0]) + Math.abs(pixel[1]);
  // });

  // console.log(
  //   summOfCoordinates.sort((a, b) => {
  //     return a - b;
  //   })
  // );

  //-------------------------------------------------------------- part 2 -----------------------------------------------

  let firstArray = firstLine.split(',');
  let secondArray = secondLine.split(',');

  const getCoordinates = line => {
    let x = 0;
    let y = 0;
    let result = [];
    line.forEach(step => {
      switch (step[0]) {
        case 'U':
          for (let z = 1; z <= +step.slice(1); z++) {
            y++;
            result.push([x, y]);
          }
          break;
        case 'R':
          for (let z = 1; z <= +step.slice(1); z++) {
            x++;
            result.push([x, y]);
          }
          break;
        case 'D':
          for (let z = 1; z <= +step.slice(1); z++) {
            y--;
            result.push([x, y]);
          }
          break;
        case 'L':
          for (let z = 1; z <= +step.slice(1); z++) {
            x--;
            result.push([x, y]);
          }
          break;
        default:
          return null;
      }
    });
    return result;
  };

  const getMiniSteps = (line, find) => {
    let x = 0;
    let y = 0;
    let miniSteps = 0;
    try {
      line.forEach(step => {
        switch (step[0]) {
          case 'U':
            for (let z = 1; z <= +step.slice(1); z++) {
              y++;
              miniSteps++;
              if (find[0] === x && find[1] === y) {
                throw new Error();
              }
            }
            break;
          case 'R':
            for (let z = 1; z <= +step.slice(1); z++) {
              x++;
              miniSteps++;
              if (find[0] === x && find[1] === y) {
                throw new Error();
              }
            }
            break;
          case 'D':
            for (let z = 1; z <= +step.slice(1); z++) {
              y--;
              miniSteps++;
              if (find[0] === x && find[1] === y) {
                throw new Error();
              }
            }
            break;
          case 'L':
            for (let z = 1; z <= +step.slice(1); z++) {
              x--;
              miniSteps++;
              if (find[0] === x && find[1] === y) {
                throw new Error();
              }
            }
            break;
          default:
            return null;
        }
      });
    } catch {
      return miniSteps;
    }
  };

  let red = getCoordinates(firstArray);
  let blue = getCoordinates(secondArray);

  // console.log(red);
  // console.log(blue);

  let intersections = [];

  red.forEach(redPixel => {
    blue.forEach(bluePixel => {
      if (redPixel[0] === bluePixel[0] && redPixel[1] === bluePixel[1]) {
        intersections.push(redPixel);
      }
    });
  });

  // console.log(intersections)

  let steps = [];

  intersections.forEach(elem => {
    let firstRed = getMiniSteps(firstArray, elem);
    let firstBlue = getMiniSteps(secondArray, elem);

    let obg = {
      red: firstRed,
      blue: firstBlue,
      coords: elem
    };

    steps.push(obg);
  });

  let sumOfSteps = steps.map(point => {
    return point.red + point.blue;
  });


  console.log(
    sumOfSteps.sort((a, b) => {
      return a - b;
    })[0]
  );
}
