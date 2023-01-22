import { useContext, useState } from 'react';
import StyledResults from "@/styles/StyledResults";
import Loader from "@/components/Loader";
import AppContext from '@/context/AppContext';


const Results = () => {
    const { loading, setLoading } = useContext(AppContext);
    
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
                    
                </div>
            </>
        )}
    
    </StyledResults>
  )
}

export default Results;