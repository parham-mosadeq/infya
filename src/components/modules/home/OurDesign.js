import Image from 'next/image';
import Link from 'next/link';
function OurDesign() {
  return (
    <>
      <div className='w-full pb-20 mt-16 grid'>
        <h1 className='text-center border-b pb-4 text-3xl text-mainTxtColor tracking-wider '>
          OUR DESIGN & BUILD SERVICES
        </h1>
        <article className='md:grid md:grid-cols-3 lg:grid-cols-4'>
          {/* projects */}
          <div className='my-10 md:mx-2 overflow-hidden transition duration-300'>
            <div className='relative'>
              <Image
                className=' w-3/4 mx-auto h-44 md:h-56 md:w-full max-h-fit hover:scale-105 hover:blur-sm'
                src='/yannick.jpg'
                width={200}
                height={190}
              />

              <div
                className='absolute w-3/4 mx-auto text-center hover:blur-none transition duration-300 hover:bg-blur-sm text-mainNavColor
             font-bold top-3 left-0 right-0  opacity-0 hover:opacity-100'
              >
                <h4>title</h4>
                <p className='h-full w-full md:text-sm lg:leading-tight leading-7 px-3 '>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                  nesciunt odit Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Ut nesciunt odit
                </p>
                <Link
                  href='/'
                  className='self-start max-w-fit hover:bg-mainNavColor hover:border-mainNavColor transition duration-700 bg-inherit text-sm border px-7 py-1 my-5 uppercase text-mainTxtColor font-light tracking-wider'
                >
                  read more
                </Link>
              </div>
            </div>
          </div>
          {/* sec */}
          <div className='md:mx-2 my-10  overflow-hidden transition duration-300'>
            <div className='relative'>
              <Image
                className=' w-3/4 mx-auto h-44 md:h-56 md:w-full hover:scale-105 hover:blur-sm'
                src='/yannick.jpg'
                width={200}
                height={190}
              />

              <div
                className='absolute w-3/4 mx-auto text-center hover:blur-none transition duration-300 hover:bg-blur-sm text-mainNavColor
             font-bold top-3 left-0 right-0  opacity-0 hover:opacity-100'
              >
                <h4>title</h4>
                <p className='h-full w-full md:text-sm lg:leading-tight leading-7 px-3'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                  nesciunt odit Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Ut nesciunt odit
                </p>
                <Link
                  href='/'
                  className='self-start  mx-auto max-w-fit hover:bg-mainNavColor hover:border-mainNavColor transition duration-700 bg-inherit text-sm border px-7 py-1 my-5 uppercase text-mainTxtColor font-light tracking-wider'
                >
                  read more
                </Link>
              </div>
            </div>
          </div>
          {/* projects */}
          {/* third */}
          <div className='md:mx-2 my-10  overflow-hidden transition duration-300'>
            <div className='relative'>
              <Image
                className=' w-3/4 mx-auto md:h-56 md:w-full h-44 hover:scale-105 hover:blur-sm'
                src='/yannick.jpg'
                width={200}
                height={190}
              />

              <div
                className='absolute w-3/4 mx-auto text-center hover:blur-none transition duration-300 hover:bg-blur-sm text-mainNavColor
             font-bold top-3 left-0 right-0  opacity-0 hover:opacity-100'
              >
                <h4>title</h4>
                <p className='h-full w-full md:text-sm  lg:leading-tight leading-7 px-3'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                  nesciunt odit Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Ut nesciunt odit
                </p>
                <Link
                  href='/'
                  className='self-start   max-w-fit hover:bg-mainNavColor hover:border-mainNavColor transition duration-700 bg-inherit text-sm border px-7 py-1 my-5 uppercase text-mainTxtColor font-light tracking-wider'
                >
                  read more
                </Link>
              </div>
            </div>
          </div>
          {/* forth */}
          <div className='md:mx-2 my-10 overflow-hidden transition duration-300'>
            <div className='relative'>
              <Image
                className=' w-3/4 mx-auto h-44 md:h-56 md:w-full hover:scale-105 hover:blur-sm'
                src='/yannick.jpg'
                width={200}
                height={190}
              />

              <div
                className='absolute w-3/4 mx-auto text-center hover:blur-none transition duration-300 hover:bg-blur-sm text-mainNavColor
             font-bold top-3 left-0 right-0  opacity-0 hover:opacity-100'
              >
                <h4>title</h4>
                <p className='h-full w-full md:text-sm leading-7 lg:leading-tight px-3'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                  nesciunt odit Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Ut nesciunt odit
                </p>
                <Link
                  href='/'
                  className='self-start   hover:bg-mainNavColor hover:border-mainNavColor transition duration-700 bg-inherit text-sm border px-7 py-1 my-5 uppercase text-mainTxtColor font-light tracking-wider'
                >
                  read more
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}

export default OurDesign;
