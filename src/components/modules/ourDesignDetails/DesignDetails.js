import { useRouter } from 'next/router';
import ourDesign from '../../../../data/ourDesDB.json';
import Image from 'next/image';
import Link from 'next/link';
import FullDesc from './FullDesc';
import Head from 'next/head';
function DesignDetails() {
  const { asPath, pathname } = useRouter();
  const breadCrumbs = asPath.split('/');
  const { designs } = ourDesign;
  const itemId = +asPath[asPath.length - 1];
  const headTitle = asPath.split('/')[2].split('-').slice(0, -1).join(' ');
  const selectedDesign = designs.filter((item) => item.id === itemId);
  return (
    <section className='bg-mainAboutColor min-h-screen w-full'>
      <Head>
        <title>MASTER ENGINEERING | {headTitle.toLocaleUpperCase()}</title>
        <meta name='description' content={headTitle} />

        <meta
          property='og:title'
          key='master engineering home page'
          content={`MASTER ENGINEERING | ${headTitle}`}
        />
        <meta
          property='og:type'
          key={`Our Services - ${headTitle}`}
          content='article'
        />

        <meta
          property='og:description'
          key={`a full description regarding ${headTitle}`}
          content={`everything you need to know about ${headTitle}`}
        />

        <meta
          property='og:image'
          key='Our Services picture'
          content='/images/category-images/image-10'
        />

        <meta
          property='og:url'
          key='link ,website, where_to_go'
          content={pathname}
        />

        <meta
          property='og:site_name'
          key='site, name,master_engineering_site_name'
          content='Masterengineering.Co.uk'
        />
        <meta name='google' content='notranslate' key='notranslate' />
        <meta name='robots' content='all' />
      </Head>
      <div className='h-48  bg-fixed flex items-center justify-center w-full bg-mainFooterColor bg-no-repeat bg-center bg-cover'>
        {/* title */}
        <div className='px-2 w-full text-mainTxtColor max-w-6xl '>
          <h1 className='text-2xl uppercase '>{headTitle}</h1>
        </div>
        {/* title */}
        <div>
          <p className='text-sm hidden text-mainTxtColor capitalize lg:block px-2'>
            <Link href={'/'}>home</Link> /{' '}
            <Link href={`/${breadCrumbs[1]}`}>our services </Link> /
            <span> {headTitle}</span>
          </p>
        </div>
      </div>

      <article className='max-w-7xl mx-auto flex items-center justify-center flex-col px-4 py-10'>
        {selectedDesign.map((item) => {
          return (
            <div
              key={item.id}
              className='  h-full w-full  flex flex-col lg:flex-row text-mainTxtColor'
            >
              <section className=' my-10 text-sm lg:text-lg leading-7 font-light'>
                <article>
                  <div className='w-full h-full lg:flex lg:items-center lg:justify-center'>
                    <p>{item.desc}</p>
                    <Image
                      className='w-3/4 mx-auto object-cover my-10 '
                      src={item.image}
                      width={420}
                      height={420}
                      alt={item.title}
                    />
                  </div>
                  <div className='col-span-2'>
                    <div className='text-justify'>
                      {/* first */}
                      <FullDesc topic={item.txtKey} />
                    </div>
                  </div>
                </article>
              </section>
            </div>
          );
        })}
      </article>
    </section>
  );
}

export default DesignDetails;
