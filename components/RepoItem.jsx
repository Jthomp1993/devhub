import styled from 'styled-components';
import Link from 'next/link';

const StyledRepoItem = styled.div`
    max-width: 1020px;

    a {
        display: flex;
        flex-direction: column;
        padding: 1rem;
        border-bottom: 2px solid var(--red);
        text-decoration: none;
        transition: .3s ease-in-out;
        

        h2 {
            font-size: 24px;
            font-weight: 700;
            color: var(--white);
            margin: 1rem 0;
        }
    }

    a:hover {
        background-color: var(--red);
    }

    .stats {
        display: flex;
        justify-content: space-between;

        color: var(--white);

        @media (min-width: 768px) {
            width: 50%;
        }

        h5 {
            font-weight: 200;
            font-size: 16px;
            margin: 0;

        }

        .repo__stat {
            color: var(--red);
            font-weight: 700;
            margin-left: 5px;
            mix-blend-mode: difference;
        }

        .stat__item {
            display: flex;
        }

        @media (max-width: 425px) {
            .forks {
                display: none;
            }
        }
    }
`;

const RepoItem = ({ repo }) => {
  return (
    <StyledRepoItem>
        <Link href={repo.html_url} target="_blank" rel="noreferrer">
            <h2>{repo.name}</h2>
            <div className="stats">
                <div className="stat__item">
                    <h5>Watching - </h5><span className='repo__stat'>{repo.watchers_count}</span>
                </div>
                <div className="stat__item forks">
                    <h5>Forks - </h5><span className='repo__stat'>{repo.forks}</span>
                </div>
                <div className="stat__item">
                    <h5>Stars - </h5><span className='repo__stat'>{repo.stargazers_count}</span>
                </div>
            </div>
        </Link>
    </StyledRepoItem>
  )
}

export default RepoItem;