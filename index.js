const moons = [
  { name: "Luna", planet: "Earth", distanceFromPlanetInKm: 384400 },
  { name: "Deimos", planet: "Mars", distanceFromPlanetInKm: 23460 },
  { name: "Phobos", planet: "Mars", distanceFromPlanetInKm: 9380 },
  { name: "Ganymede", planet: "Jupiter", distanceFromPlanetInKm: 1070000 },
  { name: "Io", planet: "Jupiter", distanceFromPlanetInKm: 421600 },
  { name: "Europa", planet: "Jupiter", distanceFromPlanetInKm: 670900 },
];

/*
  To update this function, you should:
  - Change the function to use arrow syntax, while keeping the name of the function the same.
  - Use object destructuring to assign the `name` and `planet` variables.

  You should not need to make any other changes to the code.
*/
// function organizeMoonsByPlanet(moons) {

// const [first, second] = moons
// const [first ,second] = moons // { name: 'Luna', planet: 'Earth', distanceFromPlanetInKm: 384400 }
// const {name} = moons // undefined
// console.log()
// const {name, planet} = moons
// console.log(name)

//Use arrow function 
const organizeMoonsByPlanet = (moons) => {

  const result = {};
  for (let moon of moons) {
    // const {name, planet} = moon
    const {name, planet} = moon
    // const {name} = moon
    // const {planet} = moon
    // const {planet} = moon

    if (result[planet]) {
      result[planet].push(name);
    } else {
      result[planet] = [name];
    }
}
return result;
  }
  // }

/*
  To update this function, you should:
  - Change the function to use arrow syntax, while keeping the name of the function the same.
  - Use object destructuring and the rest operator to assign the `closest` and `rest` variables.

  You should not need to make any other changes to the code.
*/
const getClosestToPlanet = (moons) =>  {

//Use object destructuring and 
//the rest operator to assign the `closest` and `rest` variables.
// -> should destructure the input with the rest syntax (1 ms) ????

  // let closest = moons[0];
  let [closest, ...rest] = moons
  // console.log(others) // -> Get every element after moons[0]
  // let closest = closest
  // console.log(closest) // -> First element from the given array "moons"
  // const rest = moons.slice(1);
  
  // const rest = others 

  for (let moon of rest) {
    if (moon.distanceFromPlanetInKm < closest.distanceFromPlanetInKm) {
      closest = moon;
    }
  }

  return closest.name;
}

/*
  To update this function, you should:
  - Change the function to use arrow syntax, while keeping the name of the function the same.
  - Set the default value of `distanceFromPlanetInKm` to "Unknown" as part of the function signature.
  - Use object shorthand to create the new object.

  You should not need to make any other changes to the code.
*/
const createMoon = (name, planet, distanceFromPlanetInKm = "Unknown" ) => {
  if (!name || !planet) {
    return "Name and planet are required.";
  }
  console.log(planet)
  // distanceFromPlanetInKm = distanceFromPlanetInKm || "Unknown";
 const test = {name, planet, distanceFromPlanetInKm} 
  return {
    name,
    planet,
    distanceFromPlanetInKm
  };
}

module.exports = {
  organizeMoonsByPlanet,
  getClosestToPlanet,
  createMoon,
};
