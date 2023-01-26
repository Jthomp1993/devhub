import styled from 'styled-components';
import Link from 'next/link';
import { RxArrowUp } from "react-icons/rx";

const StyledResultsItem = styled.div.attrs({
    className: 'results__item'
})`
        position: relative;
        max-width: auto;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        cursor: pointer;
        &:after {
        content: '';
        display: block;
        padding-top: 100%;
    }

    .overlay {
        background-color: rgba(23,16,16,0.5);
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        transition: .3s ease-in-out;
        white-space: nowrap;
        overflow: hidden;
        text-decoration: none;

        .flex__wrapper {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            h2 {
                color: var(--white);
                padding-left: 1rem;
            }

            .wrapper {
                padding: 1.5rem;
            }

            .circle {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 70px;
                width: 70px;
                border-radius: 50px;
                background-color: var(--red);
                float: right;
                transition: transform .3s ease-in-out;
                transform: translateY(-10px);
                opacity: 0;
                color: var(--white);
            }

            .icon {
                font-size: 24px;
            }
        }
    }

    .overlay:hover {
        background-color: rgba(23,16,16,0.9);

        .circle {
            opacity: 1;
            transform: rotate(45deg);
        }
    }
`;

const ResultsItem = ({ result }) => {

  return (
    <StyledResultsItem style={{ backgroundImage: `url(${result.avatar_url})`}}>
        <Link href={`/users/${result.login}`} className="overlay">
            <div className="flex__wrapper">
                <div className="wrapper">
                    <div className="circle">
                        <RxArrowUp className='icon' />
                    </div>
                </div>
                <h2>{result.login}</h2>
            </div>
        </Link>
    </StyledResultsItem>
  )
}

export default ResultsItem