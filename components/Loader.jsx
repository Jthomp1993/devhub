import styled from "styled-components";

const StyledLoader = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;

    .loading__msg {
        margin-bottom: 2rem;

        p {
            font-family: var(--cabinet);
            font-weight: 700;
            font-size: clamp(18px, 4vw, 24px);
            color: var(--white);
            line-height: 1.7;
        }
    }
    
    .spinner {
   width: 57.6px;
   height: 57.6px;
   animation: spinner-y0fdc1 2s infinite ease;
   transform-style: preserve-3d;
}

.spinner > div {
   background-color: rgba(157,69,57,0.8);
   height: 100%;
   position: absolute;
   width: 100%;
   border: 2.9px solid #fff;
}

.spinner div:nth-of-type(1) {
   transform: translateZ(-28.8px) rotateY(180deg);
}

.spinner div:nth-of-type(2) {
   transform: rotateY(-270deg) translateX(50%);
   transform-origin: top right;
}

.spinner div:nth-of-type(3) {
   transform: rotateY(270deg) translateX(-50%);
   transform-origin: center left;
}

.spinner div:nth-of-type(4) {
   transform: rotateX(90deg) translateY(-50%);
   transform-origin: top center;
}

.spinner div:nth-of-type(5) {
   transform: rotateX(-90deg) translateY(50%);
   transform-origin: bottom center;
}

.spinner div:nth-of-type(6) {
   transform: translateZ(28.8px);
}

@keyframes spinner-y0fdc1 {
   0% {
      transform: rotate(45deg) rotateX(-25deg) rotateY(25deg);
   }

   50% {
      transform: rotate(45deg) rotateX(-385deg) rotateY(25deg);
   }

   100% {
      transform: rotate(45deg) rotateX(-385deg) rotateY(385deg);
   }
}
`;

const Loader = () => {
  return (
    <StyledLoader>
        <div className="loading__msg">
            <p>Looking for developers based on your search.
            <br></br>
            Please wait a moment...
            </p>
        </div>
        <div className="spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </StyledLoader>
  )
}

export default Loader;