import { shallowMount, mount } from '@vue/test-utils'
import PokemonPages from '@/pages/PokemonPage';
import PokemonOptions from '@/components/PokemonOptions';
import PokemonPicture from '@/components/PokemonPicture';


import { pokemons } from '../mocks/pokemons.mock'

describe('vista de PokemonPages', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(PokemonPages);
  });

  test('debe de hacer match con el shapshot ', () => {
    expect(wrapper.html()).toMatchSnapshot()
  });
  test('debe de llamar el mixPokemonArray al montar', () => {
    const mixPokemonArrayspy = jest.spyOn(PokemonPages.methods, 'mixPokemonArray');
    shallowMount(PokemonPages);
    expect(mixPokemonArrayspy).toHaveBeenCalled()
  });

  test('debe de hacer match con el snapshot cuando carga los pokemons', () => {
    const wrapper = shallowMount( PokemonPages, {
      data() {
        return {
          pokemonArr: pokemons,
          pokemon: pokemons[0],
          showPokemon: false,
          loader: false,
          showAnswer: false,
          message: ''
        }
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('debe de mostrar los componentes de pokemonPicture y PokemonOption', () => {
    const wrapper = shallowMount( PokemonPages, {
      data() {
        return {
          pokemonArr: pokemons,
          pokemon: pokemons[0],
          showPokemon: false,
          loader: false,
          showAnswer: false,
          message: ''
        }
      }
    });
    const PokemonOptionsBox = wrapper.findComponent(PokemonOptions);
    const PokemonPictureBox = wrapper.findComponent(PokemonPicture);
    expect(PokemonOptionsBox.exists()).toBeTruthy();
    expect(PokemonPictureBox.exists()).toBeTruthy();
    expect(PokemonPictureBox.attributes('pokemonid')).toBe('1');
    expect(PokemonOptionsBox.attributes('pokemons')).toBeTruthy();
  });
});