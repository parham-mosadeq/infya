import AboutUsInfo from '../modules/about-us/AboutUsInfo';
import AboutUsProfile from '../modules/about-us/AboutUsProfile';

function AboutUsPage() {
  return (
    <main className='h-full bg-mainAboutColor w-full block '>
      <div className=' max-w-6xl py-16  mx-auto lg:grid lg:grid-cols-2 lg:gap-5'>
        <div className='w-full mx-auto h-64 lg:h-full'>
          <AboutUsProfile />
        </div>
        <div>
          <AboutUsInfo />
        </div>
      </div>
    </main>
  );
}

export default AboutUsPage;
