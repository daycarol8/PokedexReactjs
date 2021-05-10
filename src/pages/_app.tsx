import '../styles/global.css';
import { PokedexListProvider } from '../contexts/PokedexListContext'

function MyApp({ Component, pageProps }) {
  return(
    <Component {...pageProps} />
  );
}

export default MyApp
