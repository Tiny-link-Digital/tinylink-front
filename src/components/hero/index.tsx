import Button from "components/button";
import Input from "components/input";

import { Container } from "./styles";

interface HeroProps {
  title: string;
  subtitle?: string;
  description: string;
  buttonTitle: string;
  showInput: boolean;
}

export default function Hero({
  title,
  buttonTitle,
  description,
  showInput,
  subtitle,
}: HeroProps) {
  return (
    <Container>
      <h1 className="title">{title}</h1>
      {subtitle && <h2 className="subtitle">{subtitle}</h2>}
      <p className="paragraph">{description}</p>

      {showInput && <Input />}

      <Button title={buttonTitle} theme="second" />
    </Container>
  );
}
