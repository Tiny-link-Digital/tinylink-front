import { Container } from "./styles";
import { ReactElement } from "react";

interface MainProps {
  children: ReactElement[] | ReactElement;
}

export default function Main({ children }: MainProps) {
  return <Container>{children}</Container>;
}
