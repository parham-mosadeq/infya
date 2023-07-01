import OurProjectsPage from '@/components/templates/OurProjectsPage';
import Head from 'next/head';
import { useRouter } from 'next/router';
function OurProjects() {
  const router = useRouter();
  return (
    <main className='min-h-screen w-full bg-mainAboutColor'>
      <Head>
        <title>MASTER ENGINEERING | Our Projects</title>
        <meta
          name='description'
          content='master engineering projects landing page'
        />

        <meta
          property='og:title'
          key='master engineering projects'
          content='MASTER ENGINEERING | Our Projects'
        />
        <meta
          property='og:type'
          key='master engineering portfolio & cv - Our Projects'
          content='portfolio'
        />

        <meta
          property='og:description'
          key='what we have done in past, see a full list of them'
          content='MASTER ENGINEERING provides professional Engineering services with, architectural & interior design, Home automation, and maintenance services exclusively to the luxury retail sector and affiliated business premises.'
        />

        <meta
          property='og:image'
          key='Our Projects picture'
          content='/images/ourDesign/image-3.jpg'
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
      <OurProjectsPage />
    </main>
  );
}

export default OurProjects;
