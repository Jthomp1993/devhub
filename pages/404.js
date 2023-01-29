import styled from 'styled-components';
import Link from 'next/link';
import Circles from '@/components/Circles';

const StyledErrorPage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-family: var(--cabinet);
    color: var(--white);
    text-align: center;
    padding: 0 2rem;

    .wrapper {
        max-width: 600px;
        h1 {
            font-size: 10vw;
            font-weight: 700;
            margin: 0;
        }

        h2 {
            font-size: clamp(24px, 3vw, 40px);
            font-weight: 400
            line-height: 1.2;
            margin: 0;
        }

        .home__link {
                background-color: var(--dark);
                color: var(--white);
                padding: 1rem 2rem;
                margin-top: 4rem;
                display: inline-block;
                text-decoration: none;
                font-weight: 700;
                border-radius: 10px;
                border: solid 1px var(--white);
                transition: .3s ease-in-out;
            }

            .home__link:hover {
                background-color: var(--white);
                color: var(--dark);
            }

    }


`;

export default function Custom404() {
    return (
        <StyledErrorPage>
            <Circles />
            <div className='wrapper'>
                <h1>404!</h1>
                <h2>Sorry we couldn’t find what you were looking for.</h2>
                <Link href="/" className='home__link'>Go Back</Link>
            </div>
            
        </StyledErrorPage>
    )
}