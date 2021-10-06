import { shallowMount } from '@vue/test-utils'
import PokemonPicture from '@/components/PokemonPicture';


describe('PokemonPicture component', () => {

  test('debe de hacer match con el snapshop', () => {
    const wrapper = shallowMount(PokemonPicture, {
      props: {
        pokemonId: 1,
        showPokemon: false
      }
    });
    expect(wrapper.html()).toMatchSnapshot() 
  });

  test('debe de mostrar la imagen oculta y el pokemon 100', () => {
    const wrapper = shallowMount(PokemonPicture, {
      props: {
        pokemonId: 100,
        showPokemon: false
      }
    });
    const imgs = wrapper.findAll('img');
    expect(imgs[0].exists()).toBeTruthy();
    expect(imgs[1]).toBe(undefined);
    expect(imgs[0].classes('hidden-pokemon')).toBeTruthy();
    expect(imgs[0].attributes('src')).toBe('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg');

  });

  test('debe de mostrar el pokemon si showPokemon: true', () => {
    const wrapper = shallowMount(PokemonPicture, {
      props: {
        pokemonId: 1,
        showPokemon: true
      }
    });
    const img = wrapper.find('img');
    expect(img.exists()).toBeTruthy();
    expect(img.classes('fade-in')).toBeTruthy();
  });

});