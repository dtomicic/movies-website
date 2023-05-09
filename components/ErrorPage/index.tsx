import Image from "next/image";
import { ErrorPageStyled } from "./style";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";

const ErrorPage = () => {
    const router = useRouter();
	return (
		<ErrorPageStyled>
			<Head>
				<title>404 - Page not found</title>
			</Head>
			<Image
				src={"/images/404.svg"}
				width={1022}
				height={795}
				alt="Illustration of people eating popcorn"
			/>
            <h1>Page not found</h1>
            <div className="buttons">
                <button onClick={() => router.back()}>Go back</button>
                <Link href="/">Go home</Link>
            </div>
		</ErrorPageStyled>
	);
};

export default ErrorPage;
