import styled from "styled-components";

const StyledCircles = styled.div`

    .circle__one {
        position: absolute;
        top: -100px;
        right: -100px;
        width: 250px;
        height: 250px;
        background-color: var(--red);
        border-radius: 50%;
    }

    @media (max-width: 1024px) {
        .circle__one {
            width: 140px;
            height: 140px;
            top: -50px;
            right: -50px;
        }
    }

    .circle__two {
        position: absolute;
        top: 150px;
        right: 130px;
        width: 100px;
        height: 100px;
        background-color: var(--white);
        border-radius: 50%;
    }

    .circle__three {
        position: absolute;
        top: 225px;
        left: -75px;
        width: 200px;
        height: 200px;
        background-color: var(--red);
        border-radius: 50%;
    }

    .circle__four {
        position: absolute;
        top: 125px;
        left: 125px;
        width: 75px;
        height: 75px;
        background-color: var(--white);
        border-radius: 50%;
    }

    @media (max-width: 1024px) {
        .circle__two, .circle__three, .circle__four {
            display: none;
        }
    }

`;

const Circles = () => {
  return (
    <StyledCircles>
        <div className="circle__one"></div>
        <div className="circle__two"></div>
        <div className="circle__three"></div>
        <div className="circle__four"></div>
    </StyledCircles>
  )
}

export default Circles;