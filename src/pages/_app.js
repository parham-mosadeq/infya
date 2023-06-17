import Footer from '@/components/layouts/Footer';
import Navbar from '@/components/layouts/Navbar';
import '@/styles/global.css';
export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
