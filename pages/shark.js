import Head from 'next/head'
import Navbar from '@components/Navbar';
import Code from '@components/Code';
import { useAtom } from 'jotai';
import { sharkAtom } from '@store/useAtom';

export default function Shark() {

  const [shark, setShark] = useAtom(sharkAtom)

  return (
    <>
      <Head>
        <title>Shark Data 🦈</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="dark:bg-neutral-900 min-h-screen pb-8">

        <Navbar />

        <div className="max-w-5xl px-4 mx-auto pt-4 class">
          <h1 className="dark:text-white text-2xl font-semibold">Shark Data 🦈</h1>

          <div className="my-8">
            <p className="dark:text-white my-2">{shark} sharks around here</p>
            <button onClick={() => setShark(shark < 5 ? shark + 1 : 5)} className={`${shark === 5 && 'cursor-not-allowed'} bg-blue-500 hover:bg-blue-600 transition-all cursor-pointer text-white rounded py-1 px-2 text-sm mr-2`}>one up</button>
            <button onClick={() => setShark(shark > 0 ? shark - 1 : 0)} className={`${shark === 0 && 'cursor-not-allowed'} bg-red-500 hover:bg-red-600 transition-all cursor-pointer text-white rounded py-1 px-2 text-sm mr-2`}>one down</button>
            <button onClick={() => setShark(0)} className="bg-orange-500 hover:bg-orange-600 transition-all cursor-pointer text-white rounded py-1 px-2 text-sm mr-2">remove</button>
          </div>

          <Code name="store/useAtom" code={`import { atom } from 'jotai'

export const sharkAtom = atom(3)`} />

          <Code name="pages/shark" code={`import { useAtom } from 'jotai';
import { sharkAtom } from '@store/useAtom';

export default function Shark() {

  const [shark, setShark] = useAtom(sharkAtom)

  return (
    <p>{shark} sharks around here</p>
    <button onClick={() => setShark(shark < 5 ? shark + 1 : 5)} className={'\${sharks === 5 && 'cursor-not-allowed'} cursor-pointer'}>one up</button>
    <button onClick={() => setShark(shark > 0 ? shark - 1 : 0)} className={'\${sharks === 0 && 'cursor-not-allowed'} cursor-pointer'}>one down</button>
    <button onClick={() => setShark(0)}>remove</button>
  )
}`} />

        </div>
      </main >
    </>
  )
}
