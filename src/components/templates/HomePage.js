import Link from 'next/link';
import AboutUsInfo from '../modules/about-us/AboutUsInfo';
import AboutUsProfile from '../modules/about-us/AboutUsProfile';
import Image from 'next/image';
import OurDesign from '../modules/home/OurDesign';

function HomePage() {
  return (
    <div
      className='w-full
     bg-mainAboutColor px-4'
    >
      <article className=' max-w-6xl w-full flex flex-col items-center  mx-auto justify-center'>
        {/* video */}
        <div className='h-screen'>video</div>
        {/* video */}

        {/* about us */}
        <div className='h-fit w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-4'>
          <div className='w-full p-0 m-0 mx-auto h-1/2 lg:h-[730px] self-end lg:self-center'>
            <div className='block w-full h-full '>
              <Image
                className='block w-full h-full object-cover'
                src='/yannick.jpg'
                width={500}
                height={500}
                alt='about us '
              />
            </div>
          </div>
          <div className='pb-10'>
            <div className='text-mainTxtColor py-10 px-4 text-lg'>
              <p>
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
      </article>
    </div>
  );
}

export default HomePage;
