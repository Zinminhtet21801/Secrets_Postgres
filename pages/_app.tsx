import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) : React.ReactNode {
  return (
    <ChakraProvider >
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
