import Footer from '@/components/layouts/Footer';
import Navbar from '@/components/layouts/Navbar';
import { Roboto } from 'next/font/google';
import '@/styles/global.css';

const roboto = Roboto({
  weight: ['100', '400', '500', '700', '900'],
  subsets: ['latin'],
});

// 100;0,400;0,500;0,700;0,900

export default function App({ Component, pageProps }) {
  return (
    <main className={roboto.className}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}
