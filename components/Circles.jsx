import { useRef } from 'react';
import useIsomorphicLayoutEffect from '@/utils/useIsomorphicLayoutEffect';
import styled from "styled-components";
import { gsap } from "gsap";

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
    const circleOne = useRef();
    const circleTwo = useRef();
    const circleThree = useRef();
    const circleFour = useRef();

    useIsomorphicLayoutEffect(() => {
        gsap.set(circleOne.current, {scale: 0});
        gsap.to(circleOne.current, {duration: 2.5, scale: 1, ease: 'elastic'});
        gsap.set(circleTwo.current, {scale: 0});
        gsap.to(circleTwo.current, {duration: 2.5, scale: 1, ease: 'elastic'});
        gsap.set(circleThree.current, {scale: 0});
        gsap.to(circleThree.current, {duration: 2.5, scale: 1, ease: 'elastic'});
        gsap.set(circleFour.current, {scale: 0});
        gsap.to(circleFour.current, {duration: 2.5, scale: 1, ease: 'elastic'});
    }, []);


  return (
    <StyledCircles>
        <div className="circle__one" ref={circleOne}></div>
        <div className="circle__two" ref={circleTwo}></div>
        <div className="circle__three" ref={circleThree}></div>
        <div className="circle__four" ref={circleFour}></div>
    </StyledCircles>
  )
}

export default Circles;