import Hero from "components/hero";

export default function Home() {
  return (
    <>
      <Hero
        title="Encurte e compartilhe"
        subtitle="Aumente as chances de clicarem nos seus links"
        description="Os seus links encurtados são de fácil memorização e você poderá compartilhar eles em qualquer lugar seja, blogs, fóruns, aplicativos de mensagem, redes sociais e muito mais."
        buttonTitle="Gerar Link"
        showInput={true}
      />
    </>
  );
}
