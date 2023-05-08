import Head from "next/head";
import type { AppProps } from "next/app";
import { GlobalStyles } from "@/styles/styles";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<title>Home | Movies app</title>
			</Head>
			<Layout>
				<GlobalStyles />
				<Component {...pageProps} />
			</Layout>
		</>
	);
}
