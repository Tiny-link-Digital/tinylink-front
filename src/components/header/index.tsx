import Link from "next/link";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

import { Container } from "./styles";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Container menuOpen={menuOpen}>
      <Link href="/">
        <a className="logo">TinyLink</a>
      </Link>

      <nav className="menu">
        <Link href="/">
          <a className="item">Gerar Link</a>
        </Link>
        <Link href="/">
          <a className="item">Entrar</a>
        </Link>
      </nav>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="button-menu"
        type="button"
      >
        {!menuOpen ? <FiMenu /> : <MdClose />}
      </button>
    </Container>
  );
}
