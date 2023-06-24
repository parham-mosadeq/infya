import { FaWhatsapp } from 'react-icons/fa';
function ContactsInfo() {
  return (
    <div className='block w-full text-mainTxtColor'>
      <h3 className='text-3xl w-1/2'>contact us</h3>
      <div>
        <h3 className='text-2xl capitalize'>master engineering</h3>
      </div>
      <section className=''>
        <div>
          {/* london */}
          <div className=''>
            <h6 className='text-xl pt-4'>london</h6>
            <p>
              first floor office, 3 hornton place, london, united kingdom, W84LZ
            </p>
            <ul>
              <li className={`w-full  border-b mb-1 pb-2`}>
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
              <li className={`w-full  border-b  pb-2`}>
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
        <div>
          <div>
            <h6 className='text-xl pt-4'>dubai</h6>

            <p>#107 Al Solemiyah tower diera dubai, united arab emirates</p>
          </div>
          {/* dubai */}
          <ul className='text-sm block'>
            <li className={`w-full   border-b mb-1 pb-2`}>
              <div className='flex flex-col justify-center '>
                <span className='py-1'> phone: +971 552331984</span>
                <span>
                  {' '}
                  <a
                    className='flex items-center'
                    href='https://wa.me/+971552331984'
                    target='_blank'
                  >
                    <FaWhatsapp className='text-xl  ' />: +971 552331984
                  </a>{' '}
                </span>
              </div>
            </li>
            <li className={`w-full  border-b  pb-2`}>
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
