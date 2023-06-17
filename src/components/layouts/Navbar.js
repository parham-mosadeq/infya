import Link from 'next/link';
import { useState } from 'react';
import { HiX, HiMenu } from 'react-icons/hi';
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  const navItems = [
    'home',
    'about',
    'our services',
    'our projects',
    'contact us',
    'get in touch',
  ];
  const isLast = navItems.length - 1;

  return (
    <header className='w-screen h-24  bg-mainNavColor p-4  '>
      {/* set max size */}
      <nav className='flex w-full md:max-w-6xl mx-auto h-10 items-center justify-between text-mainTxtColor '>
        {/* logo */}
        <div>
          <Link className='text-5xl z-10' href={'/'}>
            LOGO
          </Link>
        </div>

        {/* logo */}
        <ul
          className={` bg-mainNavColor z-0 w-screen mx-auto h-fit transform duration-500  p-7 ${
            isOpen
              ? ' translate-y-[210px]  absolute left-0'
              : '-translate-y-[1000px] absolute left-0'
          }
          md:list-disc
          
          `}
        >
          {navItems.map((item, idx) => {
            const joinedItems = item.split(' ').join('-');
            return (
              <li
                className={`capitalize py-3 border-b hover:bg-gray-950 w-full ${
                  isLast === idx &&
                  'bg-getInTouch border-none rounded-3xl my-2 p-0 hover:bg-mainFooterColor'
                } `}
                key={item}
              >
                <Link
                  className={`pl-3 w-full ${isLast === idx && 'px-0'}`}
                  href={`/${item === 'home' ? '' : joinedItems}`}
                >
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>
        <span onClick={handleToggle} className=' cursor-pointer text-2xl'>
          {isOpen ? <HiX /> : <HiMenu />}
        </span>
      </nav>
    </header>
  );
}

export default Navbar;
