<template>
  <Loader v-if="!pokemon" />
  <div v-else>
    <h1>
      Quien es este pokemon?
    </h1>
    <PokemonPicture
      :pokemonId="pokemon.id"
      :showPokemon="showPokemon"
    />
    <PokemonOptions :pokemons="pokemonArr" />
  </div>
</template>

<script>
import Loader from '@/components/Loader';
import PokemonPicture from '@/components/PokemonPicture';
import PokemonOptions from '@/components/PokemonOptions';
import getPokemonOptions from '../helpers/getPokemonOptions';

export default {
  components: {
    Loader,
    PokemonPicture,
    PokemonOptions
  },
  name: 'PokemonPages',
  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false
    }
  },
  mounted() {
    this.mixPokemonArray()
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions();
      const rndInt = Math.floor( Math.random() * 4);
      this.pokemon =  this.pokemonArr[rndInt];
    }
  }

}
</script>
