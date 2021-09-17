const getPokemons = () => {
  const pokemonsArr = Array.from( Array(650) );
  return pokemonsArr.map((_, index) => index + 1);
}

const getPokemonsNames = ([a, b, c, d] = []) => {
  console.log(a, b, c, d)
}

const getPokemonsOption = () => {
  const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5);
  getPokemonsNames(mixedPokemons.splice(0, 4))
}

export default getPokemonsOption