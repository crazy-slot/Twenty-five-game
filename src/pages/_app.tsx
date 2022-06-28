import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import type { FC } from 'react';
import '~styles/globals.css';

const GA_MEASUREMENT_ID: string = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => (
	<>
		<Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
		<Script id="google-analytics" strategy="afterInteractive">
			{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', ${GA_MEASUREMENT_ID});
        `}
		</Script>
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
