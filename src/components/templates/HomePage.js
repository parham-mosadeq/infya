import Link from 'next/link';
import Image from 'next/image';
import OurDesign from '../modules/home/OurDesign';
import OurApproach from '../modules/home/OurApproach';
import TalkWithUs from '../layouts/TalkWithUs';
import ProjectsPage from './ProjectsPage';
import { motion } from 'framer-motion';
function HomePage() {
  return (
    <div className='h-full bg-mainAboutColor relative'>
      <article className='  max-w-6xl w-full  flex flex-col items-center  mx-auto justify-center'>
        {/* video */}
        <div className='h-screen'>video</div>
        {/* video */}

        {/* about us */}
        {/* <div className='h-fit  w-full grid grid-cols-1 lg:grid-cols-2  lg:content-center  gap-4'> */}
        <section className='lg:min-h-screen lg:flex lg:flex-col  '>
          {/* about */}
          <motion.article
            initial={({ opacity: 0.4 }, { x: 10000 })}
            animate={{ x: 0 }}
            transition={({ delay: 1.4 }, { type: 'spring', stiffness: 100 })}
            whileInView={{ opacity: 1 }}
          >
            <article className='w-full h-full  lg:flex  '>
              <div className='w-full p-0 m-0 mx-auto h-1/2 lg:h-full lg:w-[100%] self-end lg:self-center'>
                <div className='block w-full h-1/2 lg:h-full'>
                  <Image
                    className='block w-full h-full object-cover'
                    src='/home-page.jpg'
                    width={500}
                    height={500}
                    alt='about us '
                  />
                </div>
              </div>
              <div className='pb-10 px-4 lg:pb-0 lg:h-full lg:w-3/4'>
                <div className='text-mainTxtColor py-10 px-4 text-lg '>
                  <h1 className='text-4xl capitalize mb-3 lg:h-full'>
                    about us
                  </h1>
                  <p className='lg:h-full text-justify'>
                    We provide professional Engineering services with,
                    architectural & interior design, Home automation, and
                    maintenance services exclusively to the luxury retail sector
                    and affiliated business premises.
                  </p>

                  <Link
                    href='/about'
                    className='self-start mt-10 block w-fit hover:bg-mainNavColor hover:border-mainNavColor transition duration-700 bg-inherit text-sm border px-7 py-1 my-5 uppercase text-mainTxtColor font-light tracking-wider'
                  >
                    read more
                  </Link>
                </div>
              </div>
            </article>
          </motion.article>

          {/* our vision */}
          <motion.article
            initial={({ opacity: 0.9 }, { x: -10000 })}
            animate={{ x: 0 }}
            transition={({ delay: 1.2 }, { type: 'spring', stiffness: 100 })}
            whileInView={{ opacity: 1 }}
          >
            <article className='w-full h-full lg:flex lg:flex-row-reverse lg:-mb-36 mt-10'>
              <div className='w-full p-0 m-0 mx-auto h-1/2 lg:h-full lg:w-[100%] self-end lg:self-center'>
                <div className='block w-full h-1/2 lg:h-full'>
                  <Image
                    className='block w-full h-full object-cover'
                    src='/home-page.jpg'
                    width={500}
                    height={500}
                    alt='about us '
                  />
                </div>
              </div>
              <div className='p-4 text-mainTxtColor lg:w-3/4'>
                <h1 className='text-4xl capitalize pb-2'>Our Vision</h1>
                <p className=' lg:h-full lg:w-full text-justify'>
                  At Master Engineering we have the vision to bring
                  architectural & interior design, Home Automation, and
                  mechanical & electrical installation, together to create a
                  modern, fully integrated environment. With the advancement in
                  smartphones and technology, has allowed us to use this
                  technology to create an environment where Luxury designs merge
                  with electrical equipment is controlled by a single smart
                  device. There is continued research and development to create
                  energy-efficient smart automation and we keep fully up to date
                  on the latest technology to offer our clients.
                </p>
              </div>
            </article>
          </motion.article>
        </section>
        {/* </div> */}
        {/* about us */}

        {/* OUR DESIGN & BUILD SERVICES */}
        <>
          <OurDesign />
        </>
        {/* OUR DESIGN & BUILD SERVICES */}

        {/* OurApproach */}
        {/* OurApproach */}

        {/* view all projects */}
        {/* view all projects */}
      </article>
      <div className='w-screen '>
        <OurApproach />
      </div>
      <div className='w-screen  mx-auto'>
        <ProjectsPage />
      </div>
      <div className='w-full'>
        <TalkWithUs href={'/our-projects'} title=' view all projects' />
      </div>
    </div>
  );
}

export default HomePage;
