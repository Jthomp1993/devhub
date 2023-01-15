import GlobalStyle from '@/styles/GlobalStyle'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';


export default function App({ Component, pageProps }) {
  return (
    <>
    <GlobalStyle />
    <Navbar />
    <Component {...pageProps} />
    <Footer />
    </>
  ) 
}
