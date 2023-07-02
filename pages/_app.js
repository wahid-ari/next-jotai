import { Provider as JotaiProvider } from 'jotai'
import { GlobalProvider } from "@utils/GlobalContext";
import "@styles/globals.css";
import "@styles/prism.css";

function MyApp({ Component, pageProps }) {
  return (
    // Server - side rendering
    // If server - side rendering with a framework such as Next.js, 
    // make sure to use at least one Provider component at the root.
    <JotaiProvider>
      <GlobalProvider>
        <Component {...pageProps} />
      </GlobalProvider>
    </JotaiProvider>
  )
}

export default MyApp