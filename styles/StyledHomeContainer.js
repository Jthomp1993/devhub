import styled from "styled-components";

const StyledHomeContainer = styled.div`
    height: 130vh;
    padding: 0px 15px;
    margin-top: 120px;
    font-family: var(--cabinet);
        
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
            margin-bottom: 0;
        }

        p {
            font-weight: 400;
            font-size: clamp(16px, 3vw, 18px);
            line-height: 1.3;
        }

        .search {
            margin-top: 2rem;
        }
    }

    .form__wrapper {
        max-width: 650px;
        margin: auto;

        input:-webkit-autofill {
            -webkit-box-shadow: 0 0 0 1000px var(--dark) inset !important;
            -webkit-text-fill-color: white !important;
        }

        .form__input {
            width: 100%;
            height: 80px;
            box-sizing: border-box;
            padding: 1rem;
            font-family: var(--cabinet);
            font-size: 24px;
            font-weight: 700;
            color: var(--white);
            background: none;
            border: 0;
            border-bottom: 2px solid var(--white);
            outline: none;
        }

        .form__input::placeholder {
            color: var(--white);
        }

        .dropdown__select {
            position: relative;
            font-family: var(--cabinet);
            font-size: 24px;
            font-weight: 700;
            color: var(--white);
            padding: 1rem;
            width: 100%;
            height: 80px;
            background: none;
            border: 0;
            border-bottom: 2px solid var(--white);
            outline: none;
            appearance: none;
        }

        .error__msg {
            display: flex;
            align-items: center;
            margin: 1rem 0 0 0;
            padding-left: 1rem;
        }

        .error__msg p {
            margin: 0;
            color: var(--red);
            font-weight: 700;
            font-size: 16px;
            padding-left: 1rem;
        }

        .error__icon {
            color: var(--red);
            font-size: 26px;
            
        }
    }
`;

export default StyledHomeContainer;