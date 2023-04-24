import Head from "next/head";
import type { AppProps } from "next/app";
import { GlobalStyles } from "@/styles/styles";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <title>Movies website</title>
            </Head>
            <GlobalStyles />
            <Component {...pageProps} />
        </>
    );
}
