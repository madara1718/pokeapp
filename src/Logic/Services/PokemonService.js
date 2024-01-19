
import axios from "axios";
import { create } from "zustand";

const END_POINT = 'https://pokeapi.co/api/v2/pokemon';


const initialState = {
  pokemonList: [],
  initialList: [],
  modalOpen: false,
  filteredPokemon: [],
  filter: '',
  sortModal: false,
  pokemonNumber: false,
  pokemonName: false,
  sort: true,
  cargando: false,
  pokemon: {},
  types: [],
  
  pokemonColors:''

}


export const usePokemon = create((set, get) => ({
  ...initialState,

  getAllPokemons: async () => {

    set({ cargando: true });
    const data = [];
    try {
      for (let i = 1; i <= 151; i++) {
        await axios.get(`${END_POINT}/${i}`).then(res => data.push(res?.data));
      }
      set({ initialList: [...data], pokemonList: [...get().initialList] });
      set({ cargando: false });

    } catch (error) {

      console.error('Error al realizar la solicitud:', error);
      set({ cargando: false });
    }

  },

  setOpenModal: (value, pokemon) => {
    get().types = pokemon?.types.map((item)=>{
      return item?.type?.name
    });
    set({ modalOpen: value, pokemon });
  },

  filterPokemon: () => {

    const { pokemonList, filter } = get();

    let pokemonName = filter.target.value;
    if (filter.target.value != '') {
      const filtered = pokemonList.filter((item) => {
        return item.name.includes(pokemonName);
      });
      set({ pokemonList: filtered })

    } else {
      set({ pokemonList: get().initialList })
    }

  },

  setFilter: (value) => {
    set({ filter: value });
  },

  setSortModal: (value) => {
    set({ sortModal: value });
  },

  setSortByName: () => {
    const { pokemonList } = get();

    const sorted = pokemonList.sort((a, b) => {
      const firstName = a.name.toLowerCase();
      const secondName = b.name.toLowerCase();

      if (firstName < secondName) {
        return -1;
      }
      if (firstName > secondName) {
        return 1;
      }
      return 0;
    });
    set({ pokemonList: [...sorted] });
  },

  setPokemonList: () => {
    set({ pokemonList: [...get().initialList] })
  },

  resetState: () => {
    set(initialState);
  }
}));