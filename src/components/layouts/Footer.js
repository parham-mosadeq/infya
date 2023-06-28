import ContactsInfo from './ContactsInfo';
import CopyRight from './EndFooter';
import { navItems } from './Navbar';
import Link from 'next/link';
function Footer() {
  return (
    <footer className='w-full m-0  mx-auto bg-mainFooterColor capitalize text-mainTxtColor  flex flex-col items-center justify-center'>
      <div className='max-w-6xl w-full flex flex-col gap-5 px-4 my-10 lg:grid lg:grid-cols-3'>
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
        <div>
          <h3 className='text-2xl'>QUICK LINKS</h3>
          <ul className='w-full'>
            {navItems.map((item) => (
              <li
                className='border-b border-gray-900 w-full my-3'
                key={item.name}
              >
                <Link className='w-full block' href={item.href}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* quick links */}
        {/* contact us */}
        <div className='col-start-3 col-end-3'>
          <ContactsInfo />
        </div>
        {/* contact us */}
      </div>
      <CopyRight />
    </footer>
  );
}

export default Footer;
