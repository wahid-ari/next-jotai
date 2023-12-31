import Head from 'next/head'
import Navbar from '@components/Navbar';
import { useAtom } from 'jotai';
import { countAtom } from '@store/useAtom';
import Code from '@components/Code';

export default function Count() {
  const [count, setCount] = useAtom(countAtom)

  return (
    <>
      <Head>
        <title>Count Data 🎰</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="dark:bg-neutral-900 min-h-screen pb-8">

        <Navbar />

        <div className="max-w-5xl px-4 mx-auto pt-4 class">
          <h1 className="dark:text-white text-2xl font-semibold">Count Data 🎰</h1>

          <div className="my-8 dark:text-white">
            <p className="dark:text-white my-2">{count} count</p>
            <button onClick={() => setCount(count + 1)} className="bg-blue-500 hover:bg-blue-600 transition-all cursor-pointer text-white rounded py-1 px-2 text-sm mr-2">increment 1</button>
            <button onClick={() => setCount(count + 5)} className="bg-blue-500 hover:bg-blue-600 transition-all cursor-pointer text-white rounded py-1 px-2 text-sm mr-2">increment 5</button>
            <button onClick={() => setCount(count - 1)} className="bg-red-500 hover:bg-red-600 transition-all cursor-pointer text-white rounded py-1 px-2 text-sm mr-2">decrement 1</button>
            <button onClick={() => setCount(count - 5)} className="bg-red-500 hover:bg-red-600 transition-all cursor-pointer text-white rounded py-1 px-2 text-sm mr-2">decrement 5</button>
            <button onClick={() => setCount(0)} className="bg-orange-500 hover:bg-orange-600 transition-all cursor-pointer text-white rounded py-1 px-2 text-sm mr-2">reset</button>
          </div>

          <Code name="store/useAtom" code={`import { atom } from 'jotai'

export const countAtom = atom(0)`} />

          <Code name="pages/count" code={`import { useAtom } from 'jotai';
import { countAtom } from '@store/useAtom';

export default function Count() {

  const [count, setCount] = useAtom(countAtom)
  
  return (
    <p>{count} count</p>
    <button onClick={() => setCount(count + 1)}>increment 1</button>
    <button onClick={() => setCount(count + 5)}>increment 5</button>
    <button onClick={() => setCount(count - 1)}>decrement 1</button>
    <button onClick={() => setCount(count - 5)}>decrement 5</button>
    <button onClick={() => setCount(0)}>reset</button>
  )
}`} />

        </div>
      </main >
    </>
  )
}
