import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import ourDesign from '../../../../data/ourDesDB.json';
function OurDesign() {
  const [onHover, setOnHover] = useState(false);
  const baseUrl = '/our-services';
  const { designs } = ourDesign;
  return (
    <>
      <div className='w-full pb-20 mt-16 lg:mt-24 grid'>
        <h1 className='text-center border-b pb-4 text-3xl text-mainTxtColor tracking-wider '>
          Our Services - All the services you need, in one place
        </h1>
        <article className=''>
          {/* projects */}
          <div className='my-10 md:grid md:gap-3 md:grid-cols-2 w-full lg:grid-cols-2 xl:grid-cols-4 md:mx-2 md:w-full overflow-hidden transition duration-500 '>
            {designs.map((item) => {
              const lastIndex = item.desc.length / 3;
              const shortDesc = item.desc.slice(0, lastIndex);
              return (
                <div
                  onMouseEnter={() => setOnHover(item.id)}
                  onMouseLeave={() => setOnHover(false)}
                  key={item.id}
                  className='relative my-5 mx-auto w-[80vw] md:w-[45vw] xl:w-full'
                >
                  <div className='w-full overflow-hidden lg:w-full mx-auto'>
                    <Image
                      className={` ${onHover === item.id && 'scale-105 blur-md'}
                       
                       w-full mx-auto h-72 md:h-56 md:w-full 
                       transition duration-500 `}
                      src={item.image}
                      width={500}
                      height={500}
                      alt={item.title}
                    />
                    <h4
                      className={`${
                        onHover === item.id && 'hidden'
                      } block w-full font-bold px-1 text-center text-mainFooterColor  text-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
                    >
                      {item.title}
                    </h4>
                    {onHover === item.id && (
                      <div
                        onMouseEnter={() => setOnHover(onHover)}
                        className='block w-full  mx-auto text-center hover:blur-none transition duration-300 hover:bg-blur-sm text-mainNavColor
                    font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '
                      >
                        <h4 className='capitalize text-mainFooterColor  text-2xl font-bold w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[109px]'>
                          {item.title}
                        </h4>
                        <p className='h-full w-full mt-10 mx-auto lg:w-full md:text-sm lg:leading-tight leading-7 px-3 '>
                          {shortDesc}...
                        </p>
                        <div className='w-1/2 mt-4 md:mt-7 mx-auto'>
                          <Link
                            href={`${baseUrl}/${item.href
                              .toLowerCase()
                              .split(' ')
                              .join('-')}-${item.id}`}
                            className='inline-block w-full mx-auto hover:bg-mainNavColor hover:border-mainNavColor transition duration-700 bg-inherit text-sm border px-5 py-2 mt-1 uppercase text-mainTxtColor font-light tracking-wider'
                          >
                            read more
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </article>
      </div>
    </>
  );
}

export default OurDesign;
