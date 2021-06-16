import { Container } from "./styles";

type ThemeType = "first" | "second";

interface ButtonProps {
  title: string;
  theme?: ThemeType;
}

export default function Button({ title, theme }: ButtonProps) {
  return (
    <Container className={theme} type="button">
      {title}
    </Container>
  );
}
