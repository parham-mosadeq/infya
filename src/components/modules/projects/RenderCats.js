import { useState } from 'react';
import catDataDB from '../../../../data/catDataDB.json';
import Image from 'next/image';
function RenderCats({ selectCat }) {
  const { prCats } = catDataDB;
  const findById = prCats.filter((item) => item.catName === selectCat);

  const [hover, setOnHover] = useState(false);

  return (
    <div className='w-full max-w-6xl h-full'>
      {findById.map((item) => {
        return (
          <div
            onMouseEnter={() => setOnHover(true)}
            onMouseLeave={() => setOnHover(false)}
            className='w-full mx-auto relative overflow-hidden '
            key={item.id}
          >
            {
              <Image
                className='mx-auto w-full h-[220px] object-cover transition-all duration-500 hover:scale-110'
                src={item.images}
                width={140}
                height={140}
                alt={item.imgTitle}
              />
            }
            <p
              className={`${
                hover ? 'absolute' : 'hidden'
              } text-mainTxtColor transition-color duration-500 font-bold 
              uppercase tracking-wider hover:bg-backFilter text-center flex justify-center
               items-center w-full h-full mx-auto absolute top-1/2 left-1/2 -translate-x-1/2 
               -translate-y-1/2`}
            >
              {item.imgTitle}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default RenderCats;
