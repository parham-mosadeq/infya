import { useState } from 'react';
import catDataDB from '../../../../data/catDataDB.json';
import Image from 'next/image';
import Link from 'next/link';
function RenderCats({ selectCat }) {
  const { prCats } = catDataDB;
  const findById = prCats.filter((item) => {
    if (selectCat === 'all projects' || selectCat === '') {
      return item;
    } else if (selectCat === item.catName) {
      return item;
    }
  });

  // const findById = prCats.filter((item) => item.catName === selectCat);

  const [hover, setOnHover] = useState(false);

  const baseUrl = `/our-projects`;

  return (
    <div className='w-full max-w-6xl mx-auto lg:grid lg:grid-cols-4 h-full'>
      {findById.map((item) => {
        return (
          <div
            onMouseEnter={() => setOnHover(item.id)}
            onMouseLeave={() => setOnHover(false)}
            className='w-full mx-auto relative overflow-hidden '
            key={item.id}
          >
            <Link href={`${baseUrl}/${item.imgTitle}`}>
              <Image
                className='mx-auto w-full h-[220px] object-cover transition-all duration-500 hover:scale-110'
                src={item.images}
                width={240}
                height={240}
                alt={item.imgTitle}
              />
              <p
                className={`${
                  hover === item.id ? 'absolute' : 'opacity-0'
                } text-mainTxtColor transition-color duration-500 font-bold 
              uppercase tracking-wider hover:bg-backFilter text-center flex justify-center
              items-center w-full h-full mx-auto absolute top-1/2 left-1/2 -translate-x-1/2 
              -translate-y-1/2`}
              >
                {item.imgTitle}
              </p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default RenderCats;
