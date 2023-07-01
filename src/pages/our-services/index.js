import OurServicesPage from '@/components/templates/OurServicesPage';
import Head from 'next/head';
import { useRouter } from 'next/router';
function OurServices() {
  const router = useRouter();
  return (
    <main className='min-h-screen w-full bg-mainAboutColor'>
      <Head>
        <title>MASTER ENGINEERING | Our Services</title>
        <meta
          name='description'
          content='master engineering services page, what do we offer to our customers, what are our services'
        />

        <meta
          property='og:title'
          key='master engineering home page'
          content='MASTER ENGINEERING | Our Services'
        />
        <meta
          property='og:type'
          key='master engineering portfolio & cv - Our Services'
          content='portfolio'
        />

        <meta
          property='og:description'
          key='what we do in master engineering'
          content='MASTER ENGINEERING provides professional Engineering services with, architectural & interior design, Home automation, and maintenance services exclusively to the luxury retail sector and affiliated business premises.'
        />

        <meta
          property='og:image'
          key='Our Services picture'
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

      <OurServicesPage />
    </main>
  );
}

export default OurServices;
