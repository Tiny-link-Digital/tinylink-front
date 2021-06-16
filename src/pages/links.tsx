import Hero from "components/hero";

export default function Home() {
  return (
    <>
      <Hero
        title="Seus Links"
        description="Os seus links encurtados são de fácil memorização e você poderá compartilhar eles em qualquer lugar seja, blogs, fóruns, aplicativos de mensagem, redes sociais e muito mais."
        buttonTitle="Ir para encurtador"
        showInput={false}
      />
    </>
  );
}
