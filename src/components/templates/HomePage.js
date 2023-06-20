import Link from 'next/link';
import Image from 'next/image';
import OurDesign from '../modules/home/OurDesign';
import OurApproach from '../modules/home/OurApproach';
import TalkWithUs from '../layouts/TalkWithUs';

function HomePage() {
  return (
    <div
      className='w-full
     bg-mainAboutColor '
    >
      <article className=' max-w-6xl w-full flex flex-col items-center  mx-auto justify-center'>
        {/* video */}
        <div className='h-screen'>video</div>
        {/* video */}

        {/* about us */}
        <div className='h-fit lg:h-[65vh] w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-4'>
          <div className='w-full p-0 m-0 mx-auto h-1/2 lg:h-full lg:w-[100%] self-end lg:self-center'>
            <div className='block w-full h-full '>
              <Image
                className='block w-full h-full lg:h-1/2 object-cover'
                src='/yannick.jpg'
                width={500}
                height={500}
                alt='about us '
              />
            </div>
          </div>
          <div className='pb-10 lg:pb-0 lg:h-full'>
            <div className='text-mainTxtColor py-10 px-4 text-lg '>
              <h1 className='text-4xl capitalize mb-3 lg:h-full'>about us</h1>
              <p className='lg:h-full'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                officiis consequatur ex totam optio nobis obcaecati soluta
                doloribus quasi nam? consequatur ex totam optio nobis obcaecati
                soluta doloribus quasi nam? consequatur ex totam optio nobis
                obcaecati soluta doloribus quasi nam? consequatur ex totam optio
              </p>
            </div>
            <Link
              href='/about'
              className='self-start  max-w-fit hover:bg-mainNavColor hover:border-mainNavColor transition duration-700 bg-inherit text-sm border px-7 py-1 my-5 uppercase text-mainTxtColor font-light tracking-wider'
            >
              read more
            </Link>
          </div>
        </div>
        {/* about us */}

        {/* OUR DESIGN & BUILD SERVICES */}
        <>
          <OurDesign />
        </>
        {/* OUR DESIGN & BUILD SERVICES */}

        {/* OurApproach */}

        <OurApproach />
        {/* OurApproach */}

        {/* view all projects */}
        {/* view all projects */}
      </article>
      <div className='w-full'>
        <TalkWithUs href={'/our-projects'} title='talk with us' />
      </div>
    </div>
  );
}

export default HomePage;
