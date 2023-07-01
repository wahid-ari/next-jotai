import Head from 'next/head'
import Navbar from '@components/Navbar';
import Code from '@components/Code';
import { useAtom } from 'jotai';
import { userAtom } from '@store/useAtom';

export default function User() {

  const [user, setUser] = useAtom(userAtom)
  async function handleFetch() {
    const response = await fetch(`${process.env.API_URL}/api/users/vercel`);
    const json = await response.json();
    setUser(json)
  }
  function resetUser() {
    setUser({})
  }

  return (
    <>
      <Head>
        <title>User Data 👨🏻‍💻</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="dark:bg-neutral-900 min-h-screen pb-8">

        <Navbar />

        <div className="max-w-5xl px-4 mx-auto pt-4 class">
          <h1 className="dark:text-white text-2xl font-semibold">User Data 👨🏻‍💻</h1>

          <div className="my-8 dark:text-white">
            <p>Name : {user.name}</p>
            <p>Bio : {user.bio}</p>
            <p>Type : {user.type}</p>
            <p>Public users : {user.repos}</p>
            <p>Blog : {user.blog}</p>
            <p>Location : {user.location}</p>
            <p>Email : {user.email}</p>
            <button onClick={handleFetch} className="bg-blue-500 hover:bg-blue-600 transition-all cursor-pointer text-white rounded py-1 px-2 text-sm mt-2 mr-2">Fetch user</button>
            <button onClick={resetUser} className="bg-orange-500 hover:bg-orange-600 transition-all cursor-pointer text-white rounded py-1 px-2 text-sm mr-2">Reset user</button>
          </div>

          <Code name="store/useAtom" code={`import { atom } from 'jotai'

export const userAtom = atom({})`} />

          <Code name="pages/user" code={`import { useAtom } from 'jotai';
import { userAtom } from '@store/useAtom';

export default function User() {

  const [user, setUser] = useAtom(userAtom)
  async function handleFetch() {
    const response = await fetch('\${process.env.API_URL}/api/users/vercel');
    const json = await response.json();
    setUser(json)
  }
  function resetUser() {
    setUser({})
  }

  return (
    <p>Name : {user.name}</p>
    <p>Bio : {user.bio}</p>
    <p>Type : {user.type}</p>
    <p>Public users : {user.repos}</p>
    <p>Blog : {user.blog}</p>
    <p>Location : {user.location}</p>
    <p>Email : {user.email}</p>
    <button onClick={handleFetch}>Fetch user</button>
    <button onClick={resetUser}>Reset user</button>
  )
}`} />

        </div>
      </main >
    </>
  )
}
