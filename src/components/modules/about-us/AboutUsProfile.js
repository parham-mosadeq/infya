import Image from 'next/image';
function AboutUsProfile() {
  return (
    <div className='block w-full  h-full overflow-x-hidden'>
      <Image
        className='block w-full h-full lg:h-[490px] object-cover'
        src='/home-page.jpg'
        width={560}
        height={560}
        alt='about us '
      />
    </div>
  );
}

export default AboutUsProfile;
