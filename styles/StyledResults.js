import styled from 'styled-components';

const StyledResults = styled.div`
    height: 150vh;
    padding: 0px 15px;
    margin-top: 120px;
    font-family: var(--cabinet);
        
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
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
    }

    .item {
        width: 300px;
        height: 300px;
        background-color: white;
    }
`;

export default StyledResults;