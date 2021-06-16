import styled, { css } from "styled-components";

export const Container = styled.button`
  border: 2px solid transparent;
  box-sizing: border-box;
  border-radius: 30px;
  cursor: pointer;
  display: block;
  font-weight: 300;
  font-size: 0.875rem;
  line-height: 1.0625rem;
  margin: auto;
  min-width: 200px;
  padding: 17px 25px 16px;
  text-align: center;
  text-transform: uppercase;
  transition: all 300ms ease-in-out;

  &.first {
    border-color: ${props => props.theme.primary};
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.white};

    &:hover {
      background-color: transparent;
      color: ${props => props.theme.primary};
    }
  }

  &.second {
    border-color: ${props => props.theme.secondary};
    background-color: ${props => props.theme.secondary};
    color: ${props => props.theme.darkBlue};

    &:hover {
      background-color: transparent;
      color: ${props => props.theme.secondary};
    }
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
    min-width: 365px;
  }
`;
