import Link from 'next/link';
import { useState } from 'react';
import { HiX, HiMenu } from 'react-icons/hi';

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

  const handleToggle = () => setIsOpen(!isOpen);

  const isLast = navItems.length - 1;

  return (
    <nav
      className={`w-full  
       z-50 bg-mainNavColor p-4  `}
    >
      {/* set max size */}
      <div
        className={` transition-all duration-300 ${
          isOpen ? 'h-full' : 'h-fit'
        } flex w-full flex-wrap md:max-w-7xl mx-auto items-center justify-between text-mainTxtColor `}
      >
        {/* logo */}
        <div>
          <Link className='text-5xl z-10' href={'/'}>
            LOGO
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
          lg:list-disc
          lg:flex 
          lg:items-center
          lg:justify-center
          lg:w-4/6
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
                className={`capitalize py-3 border-b hover:bg-gray-950 w-full ${
                  isLast === idx &&
                  'bg-getInTouch border-none rounded-3xl my-2 p-0 hover:bg-mainFooterColor'
                } 
                lg:border-none
                lg:text-center
                lg:px-0
                lg:m-0
                lg:w-3/4
                `}
                key={item.name}
              >
                <Link
                  className={`pl-3 w-full block lg:p-0 ${
                    isLast === idx && 'px-0 lg:p-0 '
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
