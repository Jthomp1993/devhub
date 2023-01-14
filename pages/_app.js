import GlobalStyle from '@/styles/GlobalStyle'
import Navbar from '@/components/Navbar';


export default function App({ Component, pageProps }) {
  return (
    <>
    <GlobalStyle />
    <Navbar />
    <Component {...pageProps} />
    </>
  ) 
}
