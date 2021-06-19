import Hero from "components/hero";
import Cards from "components/cards";
import Main from "components/main";
import List from "components/links";

export default function Links() {
  return (
    <div>
      <Hero
        title="Seus Links"
        description="Os seus links encurtados são de fácil memorização e você poderá compartilhar eles em qualquer lugar seja, blogs, fóruns, aplicativos de mensagem, redes sociais e muito mais."
        buttonTitle="Ir para encurtador"
        showInput={false}
      />

      <Main>
        <Cards>
          <List />
        </Cards>
      </Main>
    </div>
  );
}
