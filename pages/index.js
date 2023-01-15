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

      </StyledHomeContainer>
    </>
  )
}
