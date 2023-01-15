import styled from "styled-components";

const StyledNavbar = styled.nav`
    position: fixed;
    top: 0px;
    right: 0px; 
    left: 0px;
    display: flex;
    align-items: center;
    height: 100px;
    width: 100%;
    margin: 0;
    z-index: 9999;
    mix-blend-mode: difference;

    padding: 0px 12px;


    @media (min-width: 768px) {
        padding: 0px 25px;
    }

    @media (min-width: 1024px) {
        padding: 0px 40px;
    }
    
    h1 {
        font-family: var(--cabinet);
        font-weight: 700;
        color: var(--white);
        font-size: 32px;
    }
`;

const Navbar = () => {
  return (
    <StyledNavbar>
        <h1>DevHub.</h1>
    </StyledNavbar>
  )
}

export default Navbar;