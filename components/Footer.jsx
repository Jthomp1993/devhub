import styled from "styled-components";

const StyledFooter = styled.footer`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    background-color: var(--red);
    height: 100vh;
    padding: 0px 12px;
        
    @media (min-width: 768px) {
        padding: 0px 25px;
    }

    @media (min-width: 1024px) {
        padding: 0px 40px;
    }

    .footer__content {
        max-width: 720px;
        margin-top: 30vh;

        h2 {
            font-family: var(--cabinet);
            font-weight: 700;
            font-size: clamp(32px, 5vw, 48px);
            color: var(--white);
            line-height: 1.2;
            margin-bottom: 2rem;
        }

        .github__link {
            position: relative;
            display: inline-block;
            vertical-align: middle;
            background: var(--white);
            color: var(--dark);
            border-radius: 30px;
            padding: 1rem 2rem;
            text-decoration: none;
            font-family: var(--cabinet);
            font-weight: 700;
            font-size: 18px;
            color: var(--dark);
            transition: 0.7s;
        }

        .github__link:hover {
            background: var(--dark);
            color: var(--white);
        }

    }

    .footnote {
        width: 100%;
        max-width: var(--max-width);
        border-bottom: solid 2px var(--white);
        margin-bottom: 3rem;
        font-family: var(--cabinet);
        color: var(--white);

        .flex__wrapper {
            display: flex;
            align-items: end;
            justify-content: space-between;
            padding-bottom: 1rem;

            @media (max-width: 768px) {
                flex-direction: column;
                justify-content: start;
                align-items: start;

                h2 {
                    padding-bottom: 5px;
                }

            }


            h2 {
                font-size: clamp(24px, 3vw, 40px);
                margin: 0;
                line-height: 0.8;
            }

            p {
                font-weight: 200;
                font-size: 12px;
                margin: 0;
            }
        }
    }
`;

const Footer = () => {
  return (
    <StyledFooter>
        <div className="footer__content">
        <h2>Not find who you were looking for?</h2>
        <a className="github__link" href="https://github.com/" target="_blank" rel="noreferrer">
            Try GitHub
        </a>
        </div>
        <div className="footnote">
            <div className="flex__wrapper">
            <h2>DevHub.</h2>
            <p>Designed & Developed By Joshua George Thompson ©</p>
            </div>
        </div>
    </StyledFooter>
  )
}

export default Footer;