import GlobalStyle from '@/styles/GlobalStyle'
import Navbar from '@/components/Navbar';
import Circles from '@/components/Circles';


export default function App({ Component, pageProps }) {
  return (
    <>
    <GlobalStyle />
    <Navbar />
    <Circles />
    <Component {...pageProps} />
    </>
  ) 
}
