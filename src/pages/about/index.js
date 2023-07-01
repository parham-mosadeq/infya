import AboutUsPage from '@/components/templates/AboutUsPage';
import { useRouter } from 'next/router';
import Head from 'next/head';
function About() {
  const router = useRouter();
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <Head>
        <title>MASTER ENGINEERING | About Us</title>
        <meta name='description' content='master engineering project page' />

        <meta
          property='og:title'
          key='master engineering projects'
          content={`MASTER ENGINEERING | About Us`}
        />
        <meta
          property='og:type'
          key='master engineering portfolio & cv - one of Our Projects details page '
          content='article'
        />

        <meta
          property='og:description'
          key={`do you want to know more about us? there you go`}
          content='MASTER ENGINEERING provides professional Engineering services with, architectural & interior design, Home automation, and maintenance services exclusively to the luxury retail sector and affiliated business premises.'
        />

        <meta
          property='og:image'
          key='Our Projects picture'
          content='/images/category-images/image-11.jpg'
        />

        <meta
          property='og:url'
          key='link ,website, where_to_go,where_am_i'
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
      <AboutUsPage />
    </div>
  );
}

export default About;
