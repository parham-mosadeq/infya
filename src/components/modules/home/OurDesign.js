import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
function OurDesign() {
  const [onHover, setOnHover] = useState(false);

  return (
    <>
      <div className='w-full pb-20 mt-16 grid'>
        <h1 className='text-center border-b pb-4 text-3xl text-mainTxtColor tracking-wider '>
          OUR DESIGN & BUILD SERVICES
        </h1>
        {/* projects */}
        <div className='mt-10 relative  overflow-hidden transition-transform duration-300'>
          <div>
            <Image
              onMouseEnter={() => setOnHover(true)}
              onMouseLeave={() => setOnHover(false)}
              className='hover:saturate-50 w-1/2 h-44 hover:scale-105 '
              src='/yannick.jpg'
              width={200}
              height={190}
            />
            {onHover && (
              <div
                onMouseEnter={() => setOnHover(true)}
                className='absolute  text-center  text-mainNavColor font-bold top-5 w-1/2'
              >
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                  nesciunt odit, tempore enim labore eum quam aspernatur eaque
                  ad maxime cumque officia quidem expedita atque laudantium.
                  Expedita repudiandae amet nihil?
                </p>
                <Link
                  href='/about'
                  className='self-start  max-w-fit hover:bg-mainNavColor hover:border-mainNavColor transition duration-700 bg-inherit text-sm border px-7 py-1 my-5 uppercase text-mainTxtColor font-light tracking-wider'
                >
                  read more
                </Link>
              </div>
            )}
          </div>
          {/* sec */}
        </div>
        {/* projects */}
      </div>
    </>
  );
}

export default OurDesign;
