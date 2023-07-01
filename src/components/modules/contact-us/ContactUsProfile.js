import Link from 'next/link';

function ContactUsProfile({ title }) {
  return (
    <>
      <div className=' relative h-36'>
        <div className='h-36 lg:h-52 w-full block  '>
          <div
            className='block px-5 object-cover bg-fixed
            h-full bg-contactUsBg bg-no-repeat bg-origin-content bg-center bg-cover'
          >
            <div className='max-w-6xl w-full h-full flex items-center justify-between mx-auto'>
              <p className=' uppercase text-3xl font-bold tracking-wider text-mainTxtColor  '>
                {title}
              </p>
              <p className='capitalize text- font-bold tracking-wider text-mainTxtColor  '>
                <Link href={'/'}>home</Link> / {title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUsProfile;
