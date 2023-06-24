import Image from 'next/image';
import Link from 'next/link';
import { FaGreaterThan } from 'react-icons/fa';
import ourDesDB from '../../../data/ourDesDB.json';
import { Fragment } from 'react';
function OurServicesPage() {
  const { designs } = ourDesDB;
  const baseUrl = '/our-services';
  return (
    <section className='w-full h-full'>
      <div className='py-10 text-4xl  px-4 lg:px-2 bg-mainBlurColor'>
        <h1 className='uppercase max-w-6xl w-full mx-auto text-mainTxtColor'>
          Our services
        </h1>
      </div>
      <article className=' w-full   flex flex-col justify-center items-center'>
        {/* Maintenance */}
        {designs.map((item) => {
          const { id, title, href, image, desc } = item;
          return (
            <div
              key={id}
              className='w-full h-full  md:flex odd:flex-row-reverse md:items-center justify-center
            odd:bg-ourServicesSec'
            >
              <Fragment>
                {/* img */}
                <div className='h-1/2 md:h-full w-full'>
                  <Image
                    className='w-full max-w-5xl mx-auto md:h-96 object-cover'
                    src={image}
                    width={630}
                    height={330}
                    alt={title}
                  />
                </div>
                {/* img */}
                {/* info */}
                <div className='w-full md:max-w-3xl mx-auto px-4 my-10 text-mainTxtColor'>
                  <div className='font-light py-2'>
                    <h3 className='uppercase'>{title}</h3>
                  </div>
                  <div className=''>
                    <p className='font-light tracking-wider text-sm py-10'>
                      {desc}
                    </p>
                    <Link
                      className='border flex items-center justify-between w-fit my-3 font-light uppercase  border-mainTxtColor px-4 py-1 bg-transparent hover:bg-mainTxtColor hover:text-mainAboutColor transition duration-300'
                      href={`${baseUrl}/${href.split(' ').join('-')}-${id}`}
                    >
                      read more
                      <FaGreaterThan />
                    </Link>
                  </div>
                </div>
                {/* info */}
              </Fragment>
            </div>
          );
        })}
        {/* Maintenance */}
      </article>
    </section>
  );
}

export default OurServicesPage;
