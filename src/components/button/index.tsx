import Link from "next/link";

import { Container, ComponentLink } from "./styles";

type ThemeType = "first" | "second";

interface ButtonProps {
  title: string;
  theme?: ThemeType;
  link?: boolean;
  href?: any;
}

export default function Button({ title, theme, link, href }: ButtonProps) {
  return link ? (
    <Link href={href}>
      <ComponentLink as="a" className={`link-button ${theme}`}>
        {title}
      </ComponentLink>
    </Link>
  ) : (
    <Container className={theme} type="button">
      {title}
    </Container>
  );
}
