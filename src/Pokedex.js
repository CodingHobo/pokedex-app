import Pokecard from "./Pokecard";

function Pokedex ({pokemon}) {
  const pokeCards = pokemon.map(card => <Pokecard name={card.name} id={card.id} type={card.type}/>)
 return (
  <div>
    {pokeCards}
  </div>
 )
}

export default Pokedex;