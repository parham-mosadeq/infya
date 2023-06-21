import Image from 'next/image';
function AboutUsProfile() {
  return (
    <div className='block w-full h-full overflow-x-hidden'>
      <Image
        className='block w-full h-full lg:h-[790px] object-cover'
        src='/yannick.jpg'
        width={500}
        height={500}
        alt='about us '
      />
    </div>
  );
}

export default AboutUsProfile;
