import Link from 'next/link';
import { FaGreaterThan } from 'react-icons/fa';
function TalkWithUs({ title, href }) {
  return (
    <div className='bg-mainApproachColor h-44 lg:h-48 flex items-center justify-center'>
      <Link
        href={href}
        className='capitalize flex items-center justify-center border px-12 font-semibold tracking-wider py-1 border-mainNavColor
        hover:bg-mainNavColor hover:text-mainTxtColor transition duration-300
        '
      >
        {title}
        <FaGreaterThan className='ml-2 text-xs' />
      </Link>
    </div>
  );
}

export default TalkWithUs;
