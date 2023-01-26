
import StyledProfile from "@/styles/StyledProfile";

export const getServerSideProps = async (context) => {
    const login = context.params.login;
    const res = await fetch(`https://api.github.com/users/${login}`);
    const data = await res.json();
    return {
        props: { user: data }
    }
}

const Profile = ({ user }) => {
 
  return (
    <StyledProfile>
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
    </StyledProfile>
  )
}


export default Profile;