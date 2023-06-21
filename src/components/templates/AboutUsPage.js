import TalkWithUs from '../layouts/TalkWithUs';
import AboutUsInfo from '../modules/about-us/AboutUsInfo';
import AboutUsProfile from '../modules/about-us/AboutUsProfile';
import ContactUsProfile from '../modules/contact-us/ContactUsProfile';

function AboutUsPage() {
  // ! NOT standard sizing
  return (
    <main className='h-full bg-mainAboutColor w-full overflow-hidden'>
      <ContactUsProfile title='about us' />
      <div className=' py-16  mx-auto flex items-center justify-center flex-col lg:flex-row'>
        {/* to turn to previous width sizes place max-w-6xl down here */}
        <div className='w-full  mx-auto h-96 lg:h-1/2 xl:h-3/4 xl:w-3/4'>
          <AboutUsProfile />
        </div>
        {/* to turn to previous width delete max-w-6xl down here */}
        <div className=' w-3/4 max-w-6xl mx-auto'>
          <AboutUsInfo />
        </div>
      </div>
      <div className='h-full'></div>
      <TalkWithUs href={'/contact-us'} title='talk with us' />
    </main>
  );
}

export default AboutUsPage;
