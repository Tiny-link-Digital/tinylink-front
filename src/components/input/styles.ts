import styled from "styled-components";

export const Container = styled.input`
  background: ${props => props.theme.white};
  border-radius: 30px;
  border: none;
  color: ${props => props.theme.gray};
  height: 60px;
  font-size: 18px;
  line-height: 22px;
  padding: 0 30px;
  width: 100%;

  &::placeholder {
    color: #666666;
  }
`;
