import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

export const countAtom = atom(0)

export const nameAtom = atom('John Doe')

export const bearAtom = atom(1)

export const lionAtom = atom(2)

export const sharkAtom = atom(3)
// Set the string key and the initial value
export const fishAtom = atomWithStorage('fish', 4)

export const fruitsAtom = atom(['apple 🍏', 'banana 🍌', 'orange 🍊'])

export const userAtom = atom({})

export const repoAtom = atom({
  data: {},
  loading: false,
  hasErrors: false
})

export const pokemonData = [
  { id: 1, name: "🐞 Bulbasaur" },
  { id: 2, name: "🦖 Ivysaur" },
  { id: 3, name: "🐙 Venusaur" },
  { id: 4, name: "🐉 Charmander" },
  { id: 5, name: "🐧 Charmeleon" }
]
export const pokemonAtom = atomWithStorage('pokemon', pokemonData)

export const studentData = [
  { id: '1', name: 'Aaron Saunders' },
  { id: '2', name: 'Andrea Saunders' },
  { id: '3', name: 'Bill Smith' },
  { id: '4', name: 'John Chambers' },
  { id: '5', name: 'Joe Johnson' }
]
export const studentAtom = atom(studentData)