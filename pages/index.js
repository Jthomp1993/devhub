import Head from 'next/head';
import StyledHomeContainer from '@/styles/StyledHomeContainer';
import Circles from '@/components/Circles';

export default function Home() {
  return (
    <>
      <Head>
        <title>DevHub - Home</title>
        <meta name="description" content="DevHub is a web app which enables users to source developers across the globe." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledHomeContainer>
        <Circles />

        <div className="heading">
            <h2>SOURCE DEVELOPERS FROM ACROSS THE GLOBE.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

            <p className='search'><strong>Please fill in at least one of the options below to begin your search.</strong></p>
        </div>

      </StyledHomeContainer>
    </>
  )
}
