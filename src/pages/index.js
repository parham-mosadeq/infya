import HomePage from '@/components/templates/HomePage';
import Head from 'next/head';
import { useRouter } from 'next/router';
export default function Home() {
  const router = useRouter();
  return (
    <main className='min-h-screen  overflow-x-hidden'>
      <Head>
        <title>MASTER ENGINEERING </title>
        <meta
          name='description'
          content='MASTER ENGINEERING provides professional Engineering services with, architectural & interior design, Home automation, and maintenance services exclusively to the luxury retail sector and affiliated business premises.'
        />

        <meta
          property='og:title'
          key='master engineering home page'
          content='MASTER ENGINEERING | Home'
        />
        <meta
          property='og:type'
          key='master engineering portfolio & cv'
          content='portfolio'
        />

        <meta
          property='og:description'
          key='who are we? and what we do in general'
          content='MASTER ENGINEERING provides professional Engineering services with, architectural & interior design, Home automation, and maintenance services exclusively to the luxury retail sector and affiliated business premises.'
        />

        <meta
          property='og:image'
          key='see our about us picture'
          content='/home-page.jpg'
        />

        <meta
          property='og:url'
          key='link ,website, where_to_go'
          content={router.pathname}
        />

        <meta
          property='og:site_name'
          key='site, name,master_engineering_site_name'
          content='Masterengineering.Co.uk'
        />
        <meta name='google' content='notranslate' key='notranslate' />
        <meta name='robots' content='all' />
      </Head>
      <HomePage />
    </main>
  );
}
