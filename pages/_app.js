// 전역에 적용할 때 _app.js
import "@/styles/global.css";

const App = ({ Component, pageProps }) => {
    return <Component {...pageProps} />;
};

export default App;
