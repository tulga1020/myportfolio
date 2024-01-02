import { HeaderLayout } from "@/components/HeaderLayout";
import "@/styles/globals.css";
import { ThemeProvider as NextThemeProvider } from "next-themes";
export default function App({ Component, pageProps }) {
  return (
    <NextThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {" "}
      {/* dotorh buh element bolon component ruu utga uurchluh bolomjtoi bolgono */}{" "}
      <HeaderLayout>
        <Component {...pageProps} />
      </HeaderLayout>
    </NextThemeProvider>
  );
}
