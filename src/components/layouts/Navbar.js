import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { HiX, HiMenu } from 'react-icons/hi';
import { FaCircle } from 'react-icons/fa';

export const navItems = [
  { name: 'home', href: '/' },
  { name: 'about', href: '/about' },
  { name: 'our services', href: '/our-services' },
  { name: 'our projects', href: '/our-projects' },
  { name: 'contact us', href: '/contact-us' },
  { name: 'get in touch', href: '/get-in-touch' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const handleToggle = () => setIsOpen(!isOpen);
  // getting last index of our navItems
  const isLast = navItems.length - 1;

  useEffect(() => {
    handleToggle(false);
  }, [router.pathname]);

  return (
    <nav
      className={`w-full  
       z-50 bg-mainNavColor p-4  `}
    >
      {/* set max size */}
      <div
        className={` transition-[height] duration-300 ${
          isOpen ? 'h-full' : 'h-fit'
        } flex w-full flex-wrap md:max-w-7xl mx-auto items-center justify-between text-mainTxtColor `}
      >
        {/* logo */}
        <div className='w-fit'>
          <Link
            className='w-full text-lg lg:text-xl font-extrabold tracking-wid '
            href={'/'}
          >
            MASTER ENGINEERING
          </Link>
        </div>
        <span
          onClick={handleToggle}
          className='lg:hidden cursor-pointer text-2xl'
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </span>
        {/* logo */}
        <ul
          className={` bg-mainNavColor w-full transform duration-700  p-7 ${
            isOpen ? 'block ' : 'hidden'
          }
          lg:flex 
          lg:items-center
          lg:justify-center
          lg:w-9/12
          lg:mx-auto
          lg:translate-y-0 
          lg:relative 
          lg:p-0
          lg:m-0
          lg:z-10
          `}
        >
          {navItems.map((item, idx) => {
            return (
              <li
                className={`capitalize font-light  py-3 border-b hover:bg-gray-950 w-full ${
                  isLast === idx &&
                  'bg-getInTouch border-none rounded-3xl my-2 p-0 hover:bg-mainFooterColor'
                } 
                lg:border-none
                lg:text-center
                lg:flex lg:flex-row-reverse lg:items-center lg:justify-around 
                lg:px-0
                lg:mx-1
                lg:w-3/4
                `}
                key={item.name}
              >
                <FaCircle
                  className={`hidden ${
                    isLast === idx && 'lg:hidden'
                  } lg:block lg:text-xs lg:font-extralight `}
                />

                <Link
                  className={`pl-3 lg:tracking-widest block w-full lg:w-fit lg:p-0 ${
                    isLast === idx && 'px-0 lg:p-0 mx-auto'
                  }`}
                  href={item.href}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
