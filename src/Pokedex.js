import Pokecard from "./Pokecard";

/**
 * Takes array of pokemon.
 * Renders a sequence of Pokecard components.
 * */

function Pokedex ({pokemon}) {
  const pokeCards = pokemon.map(card => <Pokecard name={card.name} id={card.id} type={card.type}/>)
 return (
  <div>
    {pokeCards}
  </div>
 )
}

export default Pokedex;