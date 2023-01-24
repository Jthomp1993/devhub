import { useContext, useEffect } from 'react';
import StyledResults from "@/styles/StyledResults";
import Loader from "@/components/Loader";
import ResultsItem from '@/components/ResultsItem';
import AppContext from '@/context/AppContext';


const Results = () => {
    const { loading, results } = useContext(AppContext);

    useEffect(() => {
        console.log(results);
    }, [results]);
    
  return (
    <StyledResults>
        {loading ? (
            <Loader />
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