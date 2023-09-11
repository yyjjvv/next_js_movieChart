// 전역에 적용할 때 _app.js
import '@/styles/global.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
