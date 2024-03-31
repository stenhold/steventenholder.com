// pages/_app.tsx
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Unna:ital,wght@1,700&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200&display=swap" rel="stylesheet" />
            </Head>
            {/* ...rest of your component */}
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
