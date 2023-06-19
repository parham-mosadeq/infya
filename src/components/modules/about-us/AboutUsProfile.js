import Image from 'next/image';
function AboutUsProfile() {
  return (
    <div className='block w-full h-full '>
      <Image
        className='block w-full h-full object-cover'
        src='/yannick.jpg'
        width={500}
        height={500}
        alt='about us '
      />
    </div>
  );
}

export default AboutUsProfile;
