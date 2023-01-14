import styled from "styled-components";

const StyledNavbar = styled.nav`
    position: sticky;
    display: flex;
    align-items: center;
    height: 100px;
    width: 100%;
    margin: 0;

    padding: 0px 12px;


    @media (min-width: 768px) {
        padding: 0px 25px;
    }

    @media (min-width: 1024px) {

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