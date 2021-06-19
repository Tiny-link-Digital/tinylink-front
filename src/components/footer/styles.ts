import styled from "styled-components";

export const Container = styled.footer`
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.white};

  .menu {
    display: flex;
    justify-content: center;
    gap: 10px;
    padding: 26px 15px 22px;

    .item {
      text-transform: uppercase;
    }
  }

  .credits {
    background-color: ${props => props.theme.gray};
    text-align: center;
    padding: 12px 15px;
  }
`;
