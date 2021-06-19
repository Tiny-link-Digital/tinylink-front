import { Container } from "./styles";

interface CardProps {
  image: string;
  title: string;
  description?: string;
  value?: string;
  white?: boolean;
  smallTitle?: boolean;
}

export default function Card({
  image,
  title,
  description,
  white,
  smallTitle,
  value,
}: CardProps) {
  return (
    <Container white={white} smallTitle={smallTitle}>
      <img className="thumbnail" src={image} alt={title} />

      <h3 className="title">{title}</h3>

      <p className="description">{description}</p>

      {value && <p className="value">{value}</p>}
    </Container>
  );
}
