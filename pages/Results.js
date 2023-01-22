import { useState } from 'react';
import StyledResults from "@/styles/StyledResults";
import Loader from "@/components/Loader";

const Results = () => {
    const [loading, setLoading] = useState(true);
  return (
    <StyledResults>
        {loading ? (
            <Loader />
        ) : (
            <div className="results__heading">
                <h2>Here are the results we could find based on your search.</h2>
            </div>
        )}
    
    </StyledResults>
  )
}

export default Results;