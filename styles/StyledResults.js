import styled from 'styled-components';

const StyledResults = styled.div`
    min-height: 100vh;
    padding: 0px 15px;
    margin: auto;
    margin-top: 120px;
    font-family: var(--cabinet);
    margin-bottom: 10rem;
    max-width: var(--max-width);
        
    @media (min-width: 768px) {
        padding: 0px 25px;
    }

    @media (min-width: 1024px) {
        padding: 0px 40px;
    }

    .results__heading {
        max-width: 650px;
        margin: auto;
        font-family: var(--cabinet);
        color: var(--white);
        text-align: center;

        h2 {   
            font-weight: 900;
            font-size: clamp(20px, 5vw, 26px);
            margin-bottom: 4rem;
        }
    }

    .results__grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 2rem;
        width: 70%;
        margin: auto;
    }

    @media (min-width: 590px) {
        .results__grid {
            grid-template-columns: repeat(2, 1fr);
            width: 100%;
        }
    }

    @media (min-width: 1020px) {
        .results__grid {
            grid-template-columns: repeat(3, 1fr);
            width: 100%;
        }
    }

    @media (min-width: 1400px) {
        .results__grid {
            grid-template-columns: repeat(4, 1fr);
            width: 100%;
        }
    }
`;

export default StyledResults;