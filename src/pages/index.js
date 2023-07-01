import HomePage from '@/components/templates/HomePage';
import Head from 'next/head';
export default function Home() {
  return (
    <main className='min-h-screen  overflow-x-hidden'>
      <Head>
        <title>MASTER ENGINEERING </title>
        <meta
          name='description'
          content='MASTER ENGINEERING provides professional Engineering services with, architectural & interior design, Home automation, and maintenance services exclusively to the luxury retail sector and affiliated business premises.'
        />
        <meta property='og:type' content='home page' />

        <meta property='og:title' content='MASTER ENGINEERING | Home' />

        <meta
          property='og:description'
          content='MASTER ENGINEERING provides professional Engineering services with, architectural & interior design, Home automation, and maintenance services exclusively to the luxury retail sector and affiliated business premises.'
        />

        <meta property='og:image' content='/images/home-page.jpg' />

        <meta property='og:url' content='PERMALINK' />

        <meta property='og:site_name' content='masterengineering.co.uk' />
      </Head>
      <HomePage />
    </main>
  );
}
