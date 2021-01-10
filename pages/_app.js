import { AuthProvider } from "@/lib/auth";
import "@/styles/globals.css";
import customTheme from "@/styles/theme";

// 1. Import the extendTheme function
import {
  ChakraProvider,
  CSSReset,
  extendTheme,
  useColorMode,
} from "@chakra-ui/react";
import { Global, css } from "@emotion/react";
// 2. Extend the theme to include custom colors, fonts, etc
const theme = extendTheme({ ...customTheme });

const MyApp = ({ Component, pageProps }) => {
  const { colorMode } = useColorMode();
  return (
    <ChakraProvider theme={theme}>
      <GlobalStyle />
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
};

export default MyApp;

const GlobalStyle = ({ children }) => {
  return (
    <>
      <CSSReset />
      <Global
        styles={css`
          html {
            min-width: 360px;
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
        `}
      />
      {children}
    </>
  );
};
