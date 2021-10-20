import { shallowMount } from '@vue/test-utils'
import PokemonOptions from '@/components/PokemonOptions';
import { pokemons } from '../mocks/pokemons.mock';


describe('PokemonOptions component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(PokemonOptions, {
      props: {
        pokemons
      }
    });
  })
  test('Debe de hacer match con el snapshot ', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('debe de mostrar las 4 opciones correctamente', () => {
    const liBoxPokemons = wrapper.findAll('li')
    expect(liBoxPokemons.length).toBe(4)
    expect(liBoxPokemons[0].text()).toBe(pokemons[0].name);
    expect(liBoxPokemons[1].text()).toBe(pokemons[1].name);
    expect(liBoxPokemons[2].text()).toBe(pokemons[2].name);
    expect(liBoxPokemons[3].text()).toBe(pokemons[3].name);
  });

  test('debe de emitir "selection" con sus respectivos parametros al hacer click', () => {
    const [ li1, li2, li3, li4 ] = wrapper.findAll('li');
    li1.trigger('click');
    li2.trigger('click');
    li3.trigger('click');
    li4.trigger('click');
    expect(wrapper.emitted('selection').length).toBe(4);
    expect(wrapper.emitted('selection')[0]).toEqual([pokemons[0].id]);
    expect(wrapper.emitted('selection')[1]).toEqual([pokemons[1].id]);
    expect(wrapper.emitted('selection')[2]).toEqual([pokemons[2].id]);
    expect(wrapper.emitted('selection')[3]).toEqual([pokemons[3].id]);
  });

});