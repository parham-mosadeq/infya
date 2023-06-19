import AboutUsInfo from '../modules/about-us/AboutUsInfo';
import AboutUsProfile from '../modules/about-us/AboutUsProfile';
import ContactUsProfile from '../modules/contact-us/ContactUsProfile';

function AboutUsPage() {
  return (
    <main className='h-full bg-mainAboutColor w-full block '>
      <ContactUsProfile title='about us' />
      <div className=' py-16 max-w-6xl mx-auto flex items-center justify-center flex-col lg:flex-row'>
        <div className='w-1/2 mx-auto h-96 lg:h-full'>
          <AboutUsProfile />
        </div>
        <div className='lg:w-1/2 lg:h-full'>
          <AboutUsInfo />
        </div>
      </div>
    </main>
  );
}

export default AboutUsPage;
