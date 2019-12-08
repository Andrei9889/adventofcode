import { text } from './day1-1'

export function day1() {
  const obj = text.trim().split('\n');
  // const obj = [174, 122, 178, 2]

  const dividedArray = obj.map(item => {
    let resultMass = 0;

    function recFuel(fuel) {
      let mass = Math.floor(fuel / 3) - 2;
      if (mass > 0) {
        resultMass += mass;
        recFuel(mass);
      } else return;
    }

    recFuel(item);
    return resultMass;
  });

  // console.log(dividedArray);
  const amountOfFuel = dividedArray.reduce((summ, current) => summ + current);
  // console.log(amountOfFuel); //before: 3337766, after: 5003788

  // console.log('Amount of fuel: ', amountOfFuel);
}
