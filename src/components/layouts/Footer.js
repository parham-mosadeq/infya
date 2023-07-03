import ContactsInfo from './ContactsInfo';
import CopyRight from './EndFooter';
import { navItems } from './Navbar';
import Link from 'next/link';
function Footer() {
  return (
    <footer className='w-full m-0  mx-auto bg-mainFooterColor capitalize text-mainTxtColor  flex flex-col items-center justify-center'>
      {/* <div className='max-w-7xl w-full flex flex-col gap-5 px-4 my-10 lg:grid lg:grid-cols-[20%_w-full]'> */}
      <div className='max-w-7xl w-full flex flex-col gap-5 px-4 my-10 lg:flex lg:flex-row justify-center items-center'>
        {/* <div>
          <Link href='/' className='text-4xl'>
            MASTER ENGINEERING
          </Link>
          <p className='text-xs my-2 lg:text-lg'>
            Master Engineering is Located in London and Dubai. We provide
            professional Engineering services with, architectural & interior
            design, Home automation, and maintenance services exclusively to the
            Residential, Commercial, luxury retail sector and affiliated
            business premises.
          </p>
        </div> */}
        {/* logo */}
        {/* quick links */}
        <div className='w-fit mt-3'>
          <h3 className='text-xl tracking-widest'>QUICK LINKS</h3>
          <ul className='w-full'>
            {navItems.map((item) => (
              <li
                className='border-b border-gray-900 w-full my-3'
                key={item.name}
              >
                <Link
                  className='w-full font-bold tracking-wider block'
                  href={item.href}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* quick links */}
        {/* contact us */}
        <div className='flex  justify-center items-center  '>
          <ContactsInfo isFooter={true} />
        </div>
        {/* contact us */}
      </div>
      <CopyRight />
    </footer>
  );
}

export default Footer;
