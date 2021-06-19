import Link from "next/link";
import Hero from "components/hero";
import Cards from "components/cards";
import Card from "components/card";
import Main from "components/main";
import Button from "components/button";

export default function Home() {
  return (
    <div>
      <Hero
        title="Encurte e compartilhe"
        subtitle="Aumente as chances de clicarem nos seus links"
        description="Os seus links encurtados são de fácil memorização e você poderá compartilhar eles em qualquer lugar seja, blogs, fóruns, aplicativos de mensagem, redes sociais e muito mais."
        buttonTitle="Gerar Link"
        showInput={true}
      />

      <Main>
        <Cards>
          <Card
            image="/easy.png"
            title="Simples de usar"
            description="Encurte os seus links de forma simples e tranquila, e apenas duas etapas."
          />
          <Card
            image="/security.png"
            title="Seguro"
            description="Seus links gerados seguem os protocolos de seguranças da web."
          />
          <Card
            image="/free.png"
            title="Grátis"
            description="Você pode gerar quantos links quiser, e seus links ficarão disponíveis por até um ano."
          />
        </Cards>

        <h2 className="title">Porque encurtar o seus links?</h2>

        <p className="paragraph">
          Hoje em dia, encurtar links é uma prática amplamente utilizada,
          especialmente por profissionais de mídia social. Além de ter um efeito
          visual muito bom e evitar que URLs longos poluam o espaço editorial,
          essa medida também traz outros benefícios às estratégias de marketing
          digital.
        </p>

        <Button
          link
          href="/#gerar_link"
          title="Ir para encurtador"
          theme="first"
        />

        <Cards
          primary
          className="separator-top"
          title="Links encurtados nesse site"
          description="Normalmente, quando um usuário se depara com uma URL muito longa, ele tende a se sentir assustado ou desconfiado. E esse é o total de pessoas foram ajudadas por essa ferramenta."
        >
          <Card
            white
            smallTitle
            image="/link.png"
            title="Links Ativos"
            value="1k"
          />
          <Card
            white
            smallTitle
            image="/chart.png"
            title="Links Encurtados"
            value="2,5k"
          />
          <Card
            white
            smallTitle
            image="/share.png"
            title="Links Compartilhados"
            value="1,9k"
          />
        </Cards>
      </Main>
    </div>
  );
}
