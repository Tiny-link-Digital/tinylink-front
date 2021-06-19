import { useEffect, useState } from "react";
import Link from "next/link";

import { Container } from "./styles";

export default function Footer() {
  const [since, setSince] = useState("");

  useEffect(() => {
    const _since = 2021;
    const atualYear = new Date().getFullYear();

    setSince(atualYear > _since ? `${_since} - ${atualYear}` : `${_since}`);
  }, []);

  return (
    <Container>
      <nav className="menu">
        <Link href="/">
          <a className="item">Home</a>
        </Link>
        -
        <Link href="/#gerar_link">
          <a className="item">Gerar Links</a>
        </Link>
        -
        <Link href="/">
          <a className="item">Entrar</a>
        </Link>
      </nav>

      <div className="credits">
        © {since} TinyLink - Site para encurtar um links.
      </div>
    </Container>
  );
}
