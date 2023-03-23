import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { BottleState } from "@/context/Bottle/BottleState";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <BottleState>
      <Component {...pageProps} />
    </BottleState>
  );
}
