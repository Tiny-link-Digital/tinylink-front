import styled from "styled-components";

interface ContainerInterface {
  primary?: boolean;
  theme: any;
}

export const Container = styled.div<ContainerInterface>`
  background-color: ${props =>
    props.primary ? props.theme.primary : props.theme.white};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 48px;
  padding: 0 15px;

  .cards-title {
    display: block;
    font-size: 24px;
    line-height: 29px;
    margin-top: 40px;
    margin-bottom: 30px;
    text-align: center;
    width: 100%;
  }

  .cards-description {
    font-size: 16px;
    line-height: 19px;
    margin: 0 5px 40px;
    text-align: center;
  }

  .cards-title,
  .cards-description {
    color: ${props => props.theme.white};
  }

  @media screen and (min-width: 768px) {
    .cards-description {
      margin: 0 auto 40px;
      max-width: 538px;
    }
  }
`;
