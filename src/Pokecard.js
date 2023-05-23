import React from "react"
const IMG_SRC_BASE =
"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

/** Takes a single pokemon object.
 * Shows a single Pokemon, with their name, image, and type.
 */

function Pokecard ({name, type, id}) {
  return (
  <div>
    <div>Name: {name}</div>
    <div><img src={`${IMG_SRC_BASE}${id}.png`} alt="pokeblah"/></div>
    <div>Type: {type}</div>
  </div>
  )
}

export default Pokecard;