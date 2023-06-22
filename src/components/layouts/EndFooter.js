import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
function CopyRight() {
  const currentYear = new Date().getFullYear().toString();
  return (
    <div className=' bg-mainNavColor h-36 w-full flex flex-col items-center justify-center'>
      <p className='mt-4 max-w-6xl text-center mx-auto'>
        &copy; copyright {currentYear} - MASTER ENGINEERING{' '}
      </p>
      <div className='flex items-center justify-center gap-6 mt-10 text-2xl'>
        <a href='/' target='_blank'>
          <FaFacebook />
        </a>
        <a href='/' target='_blank'>
          <FaLinkedin />
        </a>
        <a href='/' target='_blank'>
          <FaInstagram />
        </a>
      </div>
    </div>
  );
}

export default CopyRight;
