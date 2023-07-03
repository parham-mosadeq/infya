import { FaWhatsapp } from 'react-icons/fa';
function ContactsInfo({ isFooter = false }) {
  return (
    <div className='block w-full text-mainTxtColor'>
      <div>
        <h3 className='text-3xl capitalize tracking-widest'>contact us</h3>
        {/* <h3 className='text-2xl  w-fit capitalize'>master engineering</h3> */}
      </div>
      <section
        className={`${
          isFooter && 'lg:flex lg:justify-end lg:items-center'
        } capitalize`}
      >
        <div className={isFooter && 'ml-2'}>
          {/* london */}
          <div className=''>
            <h6 className='text-2xl tracking-wider py-4'>london</h6>
            <p className='lg:w-3/4  '>
              first floor office, 3 hornton place, london, united kingdom, W84LZ
            </p>
            <ul>
              <li className={`lg:w-3/4  border-b mb-1 pb-2`}>
                <div className='flex flex-col justify-center '>
                  <span className=''>mobile: +44 7729937777</span>
                  <span className=''>
                    <a
                      className='flex items-center'
                      href='https://wa.me/+447729937777'
                      target='_blank'
                    >
                      <FaWhatsapp className='text-xl' />: +44 7729937777
                    </a>
                  </span>
                </div>
              </li>
              <li className={`lg:w-3/4  border-b  pb-2`}>
                email:
                <a className='pl-3' href='mailto:info@masterengineering.com'>
                  info@masterengineering.com
                </a>
              </li>
            </ul>
          </div>
          {/* london */}
        </div>

        {/* dubai */}
        <div className=''>
          <div>
            <h6 className='text-2xl tracking-wider py-4'>dubai</h6>

            <p className='lg:w-3/4'>
              #107 Al Solemiyah tower diera dubai, united arab emirates
            </p>
          </div>
          {/* dubai */}
          <ul className='text-sm block'>
            <li className={`lg:w-3/4   border-b mb-1 pb-2`}>
              <div className='flex flex-col justify-center '>
                <span className='py-1'> phone: +971 56 565 1751</span>
                <span>
                  {' '}
                  <a
                    className='flex items-center'
                    href='https://wa.me/+971565651751'
                    target='_blank'
                  >
                    <FaWhatsapp className='text-xl  ' />: +971 56 565 1751
                  </a>{' '}
                </span>
              </div>
            </li>
            <li className={`lg:w-3/4  border-b  pb-2`}>
              email:
              <a className='pl-3' href='mailto:info@masterengineering.com'>
                info@masterengineering.com
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default ContactsInfo;
