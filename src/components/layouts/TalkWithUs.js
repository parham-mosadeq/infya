import Link from 'next/link';
function TalkWithUs() {
  return (
    <div className='bg-mainApproachColor h-44 lg:h-48 flex items-center justify-center'>
      <Link
        href='/contact-us'
        className='capitalize block border px-12 font-semibold tracking-wider py-1 border-mainNavColor
        hover:bg-mainNavColor hover:text-mainTxtColor transition duration-300
        '
      >
        talk with us
      </Link>
    </div>
  );
}

export default TalkWithUs;
