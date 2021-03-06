import { ThemeProvider } from "styled-components";
import Header from "components/header";
import Footer from "components/footer";

import GlobalStyle from "styles/globals";

import "../styles/globals.ts";

const theme = {
  primary: "#4285F4",
  secondary: "#FFCD14",
  white: "#FFFFFF",
  gray: "#333333",
  black: "#000000",
  darkBlue: "#002855",
};

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
