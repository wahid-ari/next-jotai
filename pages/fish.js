import Head from 'next/head'
import Navbar from '@components/Navbar';
import Code from '@components/Code';
import { useAtom } from 'jotai';
import { fishAtom } from '@store/useAtom';

export default function Fish() {

  const [fish, setFish] = useAtom(fishAtom)

  return (
    <>
      <Head>
        <title>Fish Data 🐟</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="dark:bg-neutral-900 min-h-screen pb-8">

        <Navbar />

        <div className="max-w-5xl px-4 mx-auto pt-4 class">
          <h1 className="dark:text-white text-2xl font-semibold">Fish Data 🐟</h1>

          <div className="my-8">
            <p className="dark:text-white my-2">{fish} fishs around here</p>
            <button onClick={() => setFish(fish + 1)} className={`bg-blue-500 hover:bg-blue-600 transition-all cursor-pointer text-white rounded py-1 px-2 text-sm mr-2`}>increase</button>
            <button onClick={() => setFish(fish - 1)} className={`bg-red-500 hover:bg-red-600 transition-all cursor-pointer text-white rounded py-1 px-2 text-sm mr-2`}>decrease</button>
            <button onClick={() => setFish(0)} className="bg-orange-500 hover:bg-orange-600 transition-all cursor-pointer text-white rounded py-1 px-2 text-sm mr-2">remove</button>
          </div>

          <Code name="store/useAtom" code={`import { atomWithStorage } from 'jotai/utils'

// Set the string key and the initial value
export const fishAtom = atomWithStorage('fish', 4)`} />

          <Code name="pages/fish" code={`import { useAtom } from 'jotai';
import { fishAtom } from '@store/useAtom';

export default function Fish() {

  const [fish, setFish] = useAtom(fishAtom)

  return (
    <p>{fish} fishs around here</p>
    <button onClick={() => setFish(fish + 1)}>one up</button>
    <button onClick={() => setFish(fish - 1)}>one down</button>
    <button onClick={() => setFish(0)}>remove</button>   
  )
}`} />

        </div>
      </main >
    </>
  )
}