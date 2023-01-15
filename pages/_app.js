import GlobalStyle from '@/styles/GlobalStyle'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Lenis from '@studio-freight/lenis'
import useIsomorphicLayoutEffect from '@/utils/useIsomorphicLayoutEffect';


export default function App({ Component, pageProps }) {

    useIsomorphicLayoutEffect(() => {
        const lenis = new Lenis({
            duration: 2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
            direction: 'vertical', // vertical, horizontal
            gestureDirection: 'vertical', // vertical, horizontal, both
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false,
          })
          
          //get scroll value
          lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
            console.log({ scroll, limit, velocity, direction, progress })
          })
          
          function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
          }
          
          requestAnimationFrame(raf)

    }, []);

    
  return (
    <>
    <GlobalStyle />
    <Navbar />
    <Component {...pageProps} />
    <Footer />
    </>
  ) 
}
