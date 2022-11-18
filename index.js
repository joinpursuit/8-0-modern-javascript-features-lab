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
const organizeMoonsByPlanet = (moons) => {
  const result = {};
  for (let moon of moons) {
    const{ name, planet } = moon /* It's important to note that the names of the variables must be the same as the keys inside of the object. While an error will not be thrown if you create a 
    different variable name, it will return undefined. Look at index.test.js for */
    
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
const getClosestToPlanet= (moons)=> {
  
  
  let [closest, ...rest] = moons
  

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
/* use const when creating an arrow function>>*/const createMoon = (name, planet, distanceFromPlanetInKm = "Unknown"/* to set a defalut parameter value you set the parmater 'equal' to a value. example distanceFromPlanetinKm= 'Unk */)=> {
  if (!name || !planet) {
    return "Name and planet are required.";
  }

  distanceFromPlanetInKm = distanceFromPlanetInKm || "Unknown";
 const newObj = {
  name,
  planet,
  distanceFromPlanetInKm,
 }
  return newObj
}

module.exports = {
  organizeMoonsByPlanet,
  getClosestToPlanet,
  createMoon,
};
