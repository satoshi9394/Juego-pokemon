import pokemonApi from '@/api/pokemonApi'


describe('PokemonApi', () => {
  test('axios debe estar configurado con el api de pokemon', () => {
    const baseUrlTest = 'https://pokeapi.co/api/v2/pokemon';
    const { defaults: { baseURL } } = pokemonApi
    expect( baseURL ).toBe(baseUrlTest)
  });
});