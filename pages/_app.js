import Head from "next/head";
import { Noto_Sans_KR } from "next/font/google";

import { ThemeProvider } from "@/context/ThemeContext";
import "@/styles/global.css";

import Header from "@/components/Layout/Header";
import Container from "@/components/Layout/Container";

const notoSansKR = Noto_Sans_KR({
    weight: ["400", "700"],
    subsets: [],
});

const App = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <title>Watchit</title>
                <link rel="icon" href="/favicon.ico" />
                <style>
                    {`
                        html {
                        font-family: ${notoSansKR.style.fontFamily}, sans-serif;
                        }
                    `}
                </style>
            </Head>
            <ThemeProvider>
                <Header />
                <Container page>
                    <Component {...pageProps} />
                </Container>
            </ThemeProvider>
        </>
    );
};

export default App;
