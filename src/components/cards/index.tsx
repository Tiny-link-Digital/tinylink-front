import { ReactElement } from "react";
import { Container } from "./styles";

interface CardsProps {
  children: ReactElement[] | ReactElement;
  className?: string;
  primary?: boolean;
  title?: string;
  description?: string;
}

export default function Cards({
  children,
  className,
  primary,
  title,
  description,
}: CardsProps) {
  return (
    <Container primary={primary} className={className}>
      {title && <span className="cards-title">{title}</span>}

      {children}

      {description && <p className="cards-description">{description}</p>}
    </Container>
  );
}
