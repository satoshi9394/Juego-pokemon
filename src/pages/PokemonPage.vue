<template>
  <Loader v-if="loader" />
  <div 
    v-else
    class="fade-in"  
  >
    <h1>
      Quien es este pokemon?
    </h1>
    <PokemonPicture
      :pokemonId="pokemon.id"
      :showPokemon="showPokemon"
    />
    <PokemonOptions 
      :pokemons="pokemonArr"
      @selection="checkAnswer"
    />
    <div 
      v-if="showAnswer"
      class="fade-in" 
    >
      <h2>
        {{ message }}
      </h2>
      <button @click="newGame">
        Nuevo Juego
      </button>
    </div>
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
      showPokemon: false,
      loader: true,
      showAnswer: false,
      message: ''
    }
  },
  async mounted() {
    await this.mixPokemonArray()
    this.hasPokemons()
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions();
      const rndInt = Math.floor( Math.random() * 4);
      this.pokemon =  this.pokemonArr[rndInt];
    },
    hasPokemons() {
      if(this.pokemon) {
        setTimeout(() => {
          this.loader = false
        }, 2000)
      }
    },
    checkAnswer(selectedId) {
      this.showPokemon = true;
      this.showAnswer = true;
      const { id, name } = this.pokemon;
      const gotItRight = selectedId === id
      this.message = gotItRight ? `Correcto, ${name}` : `Oops, era ${name}`
    },
    async newGame() {
      this.loader =  true;
      this.showPokemon = false;
      await this.mixPokemonArray()
      this.hasPokemons()
    }
  }

}
</script>
