import type { AppProps } from 'next/app';
import Head from 'next/head';
import type { FC } from 'react';
import '~styles/globals.css';

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => (
	<>
		<Head>
			<title>Twenty five game</title>
			<meta name="description" content="Twenty five game" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<div className="bg-slate-900 flex justify-center items-center h-screen">
			<Component {...pageProps} />
		</div>
	</>
);

export default MyApp;
