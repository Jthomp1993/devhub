import { useEffect } from "react";
import StyledProfile from "@/styles/StyledProfile";
import ScrollUp from "@/utils/scrollUp";
import RepoItem from "@/components/RepoItem";
import Link from 'next/link';

export const getServerSideProps = async (context) => {
    const login = context.params.login;
    const res = await fetch(`https://api.github.com/users/${login}`);
    const data = await res.json();
    const repos = await fetch(`https://api.github.com/users/${login}/repos`);
    const repoData = await repos.json();
    return {
        props: { user: data, repos: repoData }
    }
}

const Profile = ({ user, repos }) => {
    useEffect(() => {
        console.log(repos.length);
    }, []);

  return (
    <>
    <ScrollUp />
    <StyledProfile>
        <div className="back__link">
            <Link href='/Results'>Back to results</Link>
        </div>
        <div className="profile__header">
            <div style={{ backgroundImage: `url(${user.avatar_url})`}} className="profile__img"></div>
            <div className="profile__info">
                <div>
                    <h2>{user.login}</h2>
                    <h5>{user.location}</h5>
                    {user.bio && (
                        <p>{user.bio}</p>
                    )}
                    <div>
                        <a className="github__link" href={user.html_url} target="_blank" rel="noreferrer">View on GitHub</a>
                    </div>
                </div>
                <div className="stats" style={{ color: 'white'}}>
                    <div className="stats__item">
                        <h2>{user.followers}</h2>
                        <h5 className="stat">Followers</h5>
                    </div>
                    <div className="stats__item">
                        <h2>{user.following}</h2>
                        <h5 className="stat">Following</h5>
                    </div>
                    <div className="stats__item">
                        <h2>{user.public_repos}</h2>
                        <h5 className="stat">Repos</h5>
                    </div>
                    <div className="stats__item">
                        <h2>{user.public_gists}</h2>
                        <h5 className="stat">Gists</h5>
                    </div>
                </div>
            </div>
        </div>

        <div className="mobile__stats">
            <div className="mobile__stat">
                <h5>Followers -</h5>
                <h5 className="user__stat">{user.followers}</h5>
            </div>
            <div className="mobile__stat">
                <h5>Following -</h5>
                <h5 className="user__stat">{user.following}</h5>
            </div>
            <div className="mobile__stat">
                <h5>Repos -</h5>
                <h5 className="user__stat">{user.public_repos}</h5>
            </div>
            <div className="mobile__stat">
                <h5>Gists -</h5>
                <h5 className="user__stat">{user.public_gists}</h5>
            </div>
        </div>

        <div className="info">
            {user.blog && (
                <div className="info__item">
                    <p>Website</p>
                    <h5>{user.blog}</h5>
                </div>
            )}
            {user.twitter_username && (
                <div className="info__item">
                    <p>Twitter</p>
                    <h5>{user.twitter_username}</h5>
                </div>
            )}
            {user.company && (
                <div className="info__item">
                    <p>Company</p>
                    <h5>{user.company}</h5>
                </div>
            )}
        </div>

        <div className="repos">
            <div className="repos__heading">
                <h2>Repositories</h2>
            </div>
            {repos.map((repo, index) => (
                <RepoItem key={index} repo={repo}  />
            ))}
            
        </div>
    </StyledProfile>
    </>
  )
}


export default Profile;