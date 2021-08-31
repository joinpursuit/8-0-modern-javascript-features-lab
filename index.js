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
//const ["Luna", "Deimos", "Phobos", "ganymede", "Io", "Europa"] = moon
// let [first, second] = moons;
// let {name, planet} = first;
//const name = "Luna";
//const planet = "Earth";

const organizeMoonsByPlanet (moons) => {
  const result = {};
  for (const {name: n, planet: p} of moons) {
    // const name = moon.name;
    // const planet = moon.planet;
    if (result[planet]) {
      result[planet].push(name);
    } else {
      result[planet] = [name];
    }
  }
  return result;
}

const [ { name, planet }] = moons;

//console.log(planet);

/*
  To update this function, you should:
  - Change the function to use arrow syntax, while keeping the name of the function the same.
  - Use object destructuring and the rest operator to assign the `closest` and `rest` variables.

  You should not need to make any other changes to the code.
*/
const getClosestToPlanet(moons) => {
  let closest = moons[0];
  const rest = moons.slice(1);

  for (let moon of rest) {
    if (moon.distanceFromPlanetInKm < closest.distanceFromPlanetInKm) {
      closest = moon;
    }
  }

  return closest.name;
}

let [ closest, ...rest] = moons;

/*
  To update this function, you should:
  - Change the function to use arrow syntax, while keeping the name of the function the same.
  - Set the default value of `distanceFromPlanetInKm` to "Unknown" as part of the function signature.
  - Use object shorthand to create the new object.

  You should not need to make any other changes to the code.
*/
const createMoon(name, planet, distanceFromPlanetInKm = unknown) => {
  if (!name || !planet) {
    return "Name and planet are required.";
  }

  distanceFromPlanetInKm = distanceFromPlanetInKm || "Unknown";

  return {
    name: name,
    planet: planet,
    distanceFromPlanetInKm: distanceFromPlanetInKm,
  };
}



module.exports = {
  organizeMoonsByPlanet,
  getClosestToPlanet,
  createMoon,
};
