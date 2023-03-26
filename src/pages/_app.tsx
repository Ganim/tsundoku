import type { AppProps } from 'next/app';
import { CustomThemeProvider } from '@/hooks/useThemeContext';
// import { useLocalStorage } from "usehooks-ts";
import { GlobalStyle } from '@/styles/globals';

export default function App({ Component, pageProps }: AppProps) {
  // TODO: verificar se o tema vai ser alterado via localStorage ou DB
  // !as alterações para salvar devem ser feitas no hook useThemeContext.tsx
  // !persiste o tema no localStorage, node 16.14 não suporta
  // const [theme] = useLocalStorage("theme", defaultTheme);
  return (
    <>
      <CustomThemeProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </CustomThemeProvider>
    </>
  );
}