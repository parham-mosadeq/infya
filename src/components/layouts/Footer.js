import ContactsInfo from './ContactsInfo';
import CopyRight from './EndFooter';
import { navItems } from './Navbar';
import Link from 'next/link';
function Footer() {
  return (
    <footer className='w-full m-0  mx-auto bg-mainFooterColor capitalize text-mainTxtColor  flex flex-col items-center justify-center'>
      <div className='max-w-6xl w-full flex flex-col gap-5 px-4 my-10 lg:grid lg:grid-cols-3'>
        {/* logo */}
        <div>
          <h1 className='text-4xl'>LOGO</h1>
          <p className='text-xs my-2 lg:text-lg'>
            We are an architectural and interior design firm based in the UAE
            and operating worldwide. We have delivered a number of creative
            interiors for hospitality, healthcare, office, retail and
            residential spaces, from design concept to handover.
          </p>
        </div>
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
        <ContactsInfo />
        {/* contact us */}
      </div>
      <CopyRight />
    </footer>
  );
}

export default Footer;
