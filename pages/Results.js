import { useContext, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import StyledResults from "@/styles/StyledResults";
import Loader from "@/components/Loader";
import ResultsItem from '@/components/ResultsItem';
import AppContext from '@/context/AppContext';


const Results = () => {
    const { loading, results } = useContext(AppContext);

    useEffect(() => {
        
    }, [results]);
    
  return (
    <StyledResults>
        <Head>
        <title>DevHub - Results</title>
        <meta name="description" content="DevHub is a web app which enables users to source developers across the globe." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        {loading ? (
            <Loader />
        ) : (results.length < 1) ? (
            <div className="results__heading">
                <h1 style={{ marginBottom: '4rem'}}>Sorry we couldn't find any developers based on your search.</h1>
                <Link className='pill__btn' href='/'>Go Back</Link>
            </div>
        ) : (
            <>
                <div className="results__heading">
                    <h2>Here are the results we could find based on your search.</h2>
                </div>
                <div className="results__grid">
                    {results.map((result, index) => (
                        <ResultsItem key={index} result={result} /> 
                    ))}
                </div>
            </>
            
        )}
    
    </StyledResults>
  )
}

export default Results;