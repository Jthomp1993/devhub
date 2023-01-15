import styled from "styled-components";

const StyledHomeContainer = styled.div`
    height: 200vh;
    padding: 0px 12px;
    margin-top: 120px;
        
    @media (min-width: 768px) {
        padding: 0px 25px;
    }

    @media (min-width: 1024px) {
        padding: 0px 40px;
    }

    .heading {
        max-width: 650px;
        margin: auto;
        font-family: var(--cabinet);
        color: var(--white);
        mix-blend-mode: difference;

        h2 {   
            font-weight: 900;
            font-size: clamp(24px, 5vw, 48px);
        }

        p {
            font-weight: 400;
            font-size: clamp(16px, 3vw, 18px);
            line-height: 1.2;
        }

        .search {
            margin-top: 3rem;
        }
    }
`;

export default StyledHomeContainer;