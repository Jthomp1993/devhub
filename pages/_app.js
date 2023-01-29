import GlobalStyle from '@/styles/GlobalStyle';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Lenis from '@studio-freight/lenis'
import useIsomorphicLayoutEffect from '@/utils/useIsomorphicLayoutEffect';
import { AppProvider } from '@/context/AppContext';


export default function App({ Component, pageProps }) {

    useIsomorphicLayoutEffect(() => {
        const lenis = new Lenis({
            duration: 2.5,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
            
          })
          
          
          function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
          }
          
          requestAnimationFrame(raf)

          document.querySelectorAll('.lenis_target').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
              e.preventDefault();
              lenis.scrollTo('.block');
            });
          })

    }, []);

  return (
    <>
    
    <AppProvider>
    <GlobalStyle />
    <Navbar />
    <Component {...pageProps} />
    <Footer />
    </AppProvider>
    </>
  ) 
}
