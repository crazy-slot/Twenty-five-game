import type { AppProps } from 'next/app';
import type { FC } from 'react';
import '~styles/globals.css';

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => <div className="bg-slate-900 flex justify-center items-center h-screen"><Component {...pageProps} /></div>;

export default MyApp;
