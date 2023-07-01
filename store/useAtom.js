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
