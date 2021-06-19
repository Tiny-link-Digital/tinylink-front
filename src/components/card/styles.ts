import styled from "styled-components";

interface ContainerInterface {
  white?: boolean;
  smallTitle?: boolean;
  theme: any;
}

export const Container = styled.div<ContainerInterface>`
  padding: 30px 0;
  text-align: center;
  width: 100%;
  max-width: 223px;

  .title {
    color: ${props => (props.white ? props.theme.white : props.theme.black)};
    font-weight: bold;
    font-size: ${props => (props.smallTitle ? "14px" : "20px")};
    line-height: 24px;
  }

  .description {
    color: ${props => (props.white ? props.theme.white : props.theme.gray)};
    font-size: 16px;
    line-height: 19px;
  }

  .value {
    color: ${props => (props.white ? props.theme.white : props.theme.gray)};
    font-size: 36px;
    line-height: 43px;
  }

  .thumbnail,
  .title {
    margin-bottom: 15px;
    text-transform: uppercase;
  }
`;
