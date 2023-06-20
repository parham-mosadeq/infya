import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
function OurDesign() {
  const [onHover, setOnHover] = useState(false);
  const title = 'RESIDENTIAL';
  return (
    <>
      <div className='w-full pb-20 mt-16 lg:mt-16 grid'>
        <h1 className='text-center border-b pb-4 text-3xl text-mainTxtColor tracking-wider '>
          OUR DESIGN & BUILD SERVICES
        </h1>
        <article className='md:grid md:grid-cols-2 w-full lg:grid-cols-4'>
          {/* projects */}
          <div className='my-10 md:mx-2 md:w-full overflow-hidden transition duration-500 '>
            <div
              className='relative md:w-full'
              onMouseEnter={() => setOnHover(true)}
              onMouseLeave={() => setOnHover(false)}
            >
              <div>
                <Image
                  className={`${
                    onHover && ' hover:scale-105 hover:blur-sm'
                  } w-3/4 mx-auto h-56 md:h-56 md:w-full   transition duration-500 `}
                  src='/yannick.jpg'
                  width={200}
                  height={190}
                />
                {!onHover && (
                  <h4 className=' block text-mainTxtColor text-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    {title}
                  </h4>
                )}
                {onHover && (
                  <div
                    className='uppercase w-full block mx-auto text-center hover:blur-none transition duration-300 hover:bg-blur-sm text-mainNavColor
                font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '
                  >
                    <h4 className='uppercase text-mainTxtColor text-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[109px]'>
                      {title}
                    </h4>
                    <p className='h-full w-3/4 mx-auto md:w-3/4 lg:w-full md:text-sm lg:leading-tight leading-7 px-3 '>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ut nesciunt odit Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Ut nesciunt odit
                    </p>
                    <div className='w-1/2 mx-auto'>
                      <Link
                        href='/'
                        className='inline-block w-full mx-auto hover:bg-mainNavColor hover:border-mainNavColor transition duration-700 bg-inherit text-sm border px-5 py-2 mt-5 uppercase text-mainTxtColor font-light tracking-wider'
                      >
                        read more
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}

export default OurDesign;
