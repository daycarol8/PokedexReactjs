import '../styles/global.css';
import { PokedexListProvider } from '../contexts/PokedexListContext'

function MyApp({ Component, pageProps }) {
  return(
    <PokedexListProvider>
      <Component {...pageProps} />
    </PokedexListProvider>
  );
}

export default MyApp
