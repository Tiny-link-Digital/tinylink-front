import styled from "styled-components";

export const Container = styled.header`
  background: ${props => props.theme.primary};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 21px 16px;
  position: sticky;

  .logo {
    color: ${props => props.theme.white};
    font-size: 32px;
    line-height: 38px;
  }

  .menu {
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.white};
    display: flex;
    gap: 15px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: ${(props: { menuOpen: boolean }) =>
      props.menuOpen ? "translateX(0)" : "translateX(-200%)"};
    transition: all 300ms ease-in-out;

    .item {
      font-size: 2rem;
    }
  }

  .button-menu {
    background-color: transparent;
    border: none;
    color: ${props => props.theme.white};
    font-size: 36px;
    line-height: 0;
    position: absolute;
    right: 15px;
  }

  @media screen {
    @media (min-width: 768px) {
      .menu {
        color: ${props => props.theme.white};
        gap: 20px;
        flex-direction: row;
        align-items: center;
        height: auto;
        right: 15px;
        left: auto;
        transform: translateX(0);
        text-transform: uppercase;

        .item {
          font-size: 0.75em;
        }
      }

      .button-menu {
        display: none;
      }
    }
  }
`;
