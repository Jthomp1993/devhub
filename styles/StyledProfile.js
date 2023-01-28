import styled from 'styled-components';

const StyledProfile = styled.section`
    margin-top: 120px;
    min-height: 100vh;
    padding: 0px 15px;
    max-width: var(--max-width);
    margin: auto;
    font-family: var(--cabinet);
    margin-bottom: 10rem;

    @media (min-width: 768px) {
        padding: 0px 25px;
    }

    @media (min-width: 1024px) {
        padding: 0px 80px;
    }

    .back__link {
        margin-bottom: 2rem;
         
        a {
            color: var(--white);
            font-size: 18px;
        }
    }

    .profile__header {
        display: grid;
        grid-template-columns: 1fr;
        gap: 2rem;
        max-width: 1020px;
        margin-bottom: 2rem 0;

        @media (min-width: 680px) {
            grid-template-columns: 1fr 2fr;
        }

        .profile__img {
            position: relative;
            max-width: auto;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center center;
            box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
            cursor: pointer;
            &:after {
                content: '';
                display: block;
                padding-top: 100%;
            }
        }

        .profile__info {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            color: var(--white);

            h2 {
                font-size: 32px;
                font-weight: 700;
                margin: 0;
                word-break: break-all;
            }

            h5 {
                font-weight: 200;
                font-size: 18px;
                margin: 5px 0;
            }

            p {
                font-size: 16px;
                font-weight: 200;
                margin: 10px 0;
            }

            .github__link {
                background-color: var(--dark);
                color: var(--white);
                padding: 1rem 2rem;
                margin-top: 1rem;
                display: inline-block;
                text-decoration: none;
                font-weight: 700;
                border-radius: 10px;
                border: solid 1px var(--white);
                transition: .3s ease-in-out;
            }

            .github__link:hover {
                background-color: var(--white);
                color: var(--dark);
            }

            .stats {
                display: flex;
                justify-content: space-between;

                @media (max-width: 920px) {
                    display: none;
                }

                .stats__item {
                    text-align: center;

                    h2 {
                        font-size: 32px;
                        font-weight: 700;
                        color: var(--red);
                        margin-bottom: 5px;
                    }

                    .stat {
                        font-size: 20px;
                        font-weight: 200;
                        margin: 0;
                        line-height: 0.7
                    }
                }
            }
        }
    }

    .info {
        display: flex;
        flex-direction: column;
        margin-bottom: 2rem;

        .info__item {

            p {
                font-size: 14px;
                color: var(--light-grey);
                margin-bottom: 0px;
            }
            
            h5 {
                color: var(--white);
                font-size: 20px;
                font-weight: 200;
                margin: 0;
            }
        }

    }

    .mobile__stats {
        display: flex;
        flex-direction: column;

        @media (min-width: 921px) {
            display: none;
        }

        .mobile__stat {
            display: flex;

            h5 {
                font-size: 24px;
                color: var(--white);
                margin: 5px 0;
            }

            .user__stat {
                color: var(--red);
                margin-left: 5px;
                font-weight: 700;
            }
        }
    }

    .repos {
        margin-top: 4rem;

        .repos__heading {
            
            h2 {
                font-size: 48px;
                color: var(--white);
                margin: 1rem 0;
            }
    }

    }

`;

export default StyledProfile;