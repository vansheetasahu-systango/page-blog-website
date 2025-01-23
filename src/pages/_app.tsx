import type { AppProps } from "next/app";
import "../styles/globals.css"; // Import global styles
import AuthContextProvider from "../contexts/AuthContext"; // Import AuthContext

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}

export default MyApp;
