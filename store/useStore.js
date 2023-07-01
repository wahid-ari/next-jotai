import create from 'zustand';
import { persist } from 'zustand/middleware';
import axios from "axios";


export const useUserStore = create((set) => ({
  user: {},
  fetch: async (url) => {
    const response = await fetch(url);
    const json = await response.json();
    set({ user: json })
  },
  reset: () => set({ user: {} })
}))


export const useRepoStore = create((set) => ({
  repo: {},
  loading: false,
  hasErrors: false,
  fetchRepo: async (param = 'nextjs') => {
    const url = `${process.env.API_URL}/api/repos/${param}`
    set(() => ({ loading: true }));
    try {
      const response = await axios.get(url);
      set((state) => ({ repo: (state.repo = response.data), loading: false }));
    } catch (err) {
      set(() => ({ hasErrors: true, loading: false }));
    }
  },
  resetRepo: () => set({
    repo: {},
    loading: false,
    hasErrors: false,
  })
}));


export const usePokemonStore = create(
  persist(
    (set, get) => ({
      pokemons: [
        { id: 1, name: "🐞 Bulbasaur" },
        { id: 2, name: "🦖 Ivysaur" },
        { id: 3, name: "🐙 Venusaur" },
        { id: 4, name: "🐉 Charmander" },
        { id: 5, name: "🐧 Charmeleon" }
      ],
      addPokemon: (name) =>
        set((state) => ({
          pokemons: [
            ...state.pokemons,
            { name: name, id: Math.random() * 100 },
          ]
        })),
      removePokemon: (id) =>
        set((state) => ({
          pokemons: state.pokemons.filter((pokemon) => pokemon.id !== id),
        })),
      removeAllPokemons: () => set({ pokemons: [] }),
      restoreAllPokemons: () => set({
        pokemons: [
          { id: 1, name: "🐞 Bulbasaur" },
          { id: 2, name: "🦖 Ivysaur" },
          { id: 3, name: "🐙 Venusaur" },
          { id: 4, name: "🐉 Charmander" },
          { id: 5, name: "🐧 Charmeleon" }
        ]
      })
    }),
    {
      name: 'pokemon-storage',
      getStorage: () => localStorage,
    }
  )
);


export const useStudentStore = create(set => ({
  students: [
    { id: '1', name: 'Aaron Saunders' },
    { id: '2', name: 'Andrea Saunders' },
    { id: '3', name: 'Bill Smith' },
    { id: '4', name: 'John Chambers' },
    { id: '5', name: 'Joe Johnson' }
  ],
  addStudent: (name) =>
    set(state => ({
      students: [
        ...state.students,
        {
          name: name,
          id: Math.random() * 100 + '',
        }
      ]
    })),
  removeStudent: (id) =>
    set(state => ({
      students: state.students.filter(student => student.id !== id)
    })),
  updateStudent: (id, name) =>
    set(state => ({
      students: state.students.map(item => {
        if (item.id === id) {
          return {
            ...item,
            name: name
          };
        } else {
          return item;
        }
      })
    })),
  removeAllStudents: () => set({ students: [] }),
  restoreAllStudents: () => set({
    students: [
      { id: '1', name: 'Aaron Saunders' },
      { id: '2', name: 'Andrea Saunders' },
      { id: '3', name: 'Bill Smith' },
      { id: '4', name: 'John Chambers' },
      { id: '5', name: 'Joe Johnson' }
    ]
  })
}));