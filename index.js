const moons = [
  { name: "Luna", planet: "Earth", distanceFromPlanetInKm: 384400 },
  { name: "Deimos", planet: "Mars", distanceFromPlanetInKm: 23460 },
  { name: "Phobos", planet: "Mars", distanceFromPlanetInKm: 9380 },
  { name: "Ganymede", planet: "Jupiter", distanceFromPlanetInKm: 1070000 },
  { name: "Io", planet: "Jupiter", distanceFromPlanetInKm: 421600 },
  { name: "Europa", planet: "Jupiter", distanceFromPlanetInKm: 670900 },
];



//Arrow functions
//These functions do not get hoisted to the top of the file
//Made up of three parts:
// 1. Parens for params
// 2. Thick arrow
// 3. Curly brackets

//Example:
//const sayHello = () ==> {}
//return "Hello World"

//Short had arrow function/funmction expression
// If the function can be written in one line, we can drop the curly brackets
//Witohout curly brackets, whatever come after the arrow is what will be returned.
//The return keyword is omitted because the return is implied
//Example
// const planteRadiusInKilometers2 = () => planet.radiousInMiles  * 1.609

//Short, shorthand version
// If the function only takes ONE params, we can drop the parens around tehparams
//Example
//const sayHello = name => "Hello, ${name}"
/*
  To update this function, you should:
  - Change the function to use arrow syntax, while keeping the name of the function the same.
  - Use object destructuring to assign the `name` and `planet` variables.

  You should not need to make any other changes to the code.
*/
//function organizeMoonsByPlanet(moons) {
  
const organizeMoonsByPlanet = () => {

 const result = {};
  for (let moon of moons) {
    const {name, planet } = moon;
    if (result[planet]) {
      result[planet].push(name);
    } else {
      result[planet] = [name];
    }
  }
  return result;
}

/*
  To update this function, you should:
  - Change the function to use arrow syntax, while keeping the name of the function the same.
  - Use object destructuring and the rest operator to assign the `closest` and `rest` variables.

  You should not need to make any other changes to the code.
*/
getClosestToPlanet = (moons) => {
let [closest] = moons;
const [,...rest] = moons
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
createMoon = (name, planet, distanceFromPlanetInKm = "Unknown") => {
  if (!name || !planet) {
    return "Name and planet are required.";
  }

  distanceFromPlanetInKm = distanceFromPlanetInKm || "Unknown";
  return {name, planet, distanceFromPlanetInKm}
    
  };


module.exports = {
  organizeMoonsByPlanet,
  getClosestToPlanet,
  createMoon,
};
