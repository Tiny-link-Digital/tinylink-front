import styled from "styled-components";

export const Container = styled.section`
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.white};
  padding: 35px 15px 134px;

  .paragraph {
    margin: 0 auto 30px;
    max-width: 538px;
  }

  input {
    display: block;
    margin: 0 auto 17px;
    width: 100%;
    max-width: 730px;
  }

  @media screen and (min-width: 768px) {
    padding: 78px 15px 175px;

    .paragraph {
      margin: 0 auto 38px;
    }

    input {
      margin: 0 auto 30px;
    }
  }
`;
