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
// instruction #1
const organizeMoonsByPlanet = (moons) => {
  const result = {};
  
  
  for (let moon of moons) {
    // instruction #2
    const {name, planet} = moon;

    if (result[planet]) {
      result[planet].push(name);
    } else {
      result[planet] = [name];
    }
  }
  return result;
}
organizeMoonsByPlanet(moons);
/*
  To update this function, you should:
  - Change the function to use arrow syntax, while keeping the name of the function the same.
  - Use ARRAY destructuring and the rest operator to assign the `closest` and `rest` variables.

  You should not need to make any other changes to the code.
*/
const getClosestToPlanet = (moons) => {
  // uses array destructuring, grabs array elements by order, strict naming doesn't matter
  // 'closest' becomes the 1st element from 'moons', 0th index, 1 single object
  // rest operator gathers the rest (after the 1st element) of the 'moons' elements into an array called 'rest'
  // thus, we can iterate through 'rest' on line 52
  // use 'let' because variable 'closest' will have to get reassigned, //> line 50
  // line 50, is creating a variable 'closest' value being the 1st element from 'moons' array
  // also, creating an array 'rest' with elements following the 1st element from 'moons' 
  let [closest, ...rest] = moons;

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
const createMoon = (name, planet, distanceFromPlanetInKm = "Unknown") => {
  if (!name || !planet) {
    return "Name and planet are required.";
  }

  // distanceFromPlanetInKm = distanceFromPlanetInKm || "Unknown";

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
