import { useState } from 'react';
import RenderCats from './RenderCats';
import catDataDB from '../../../../data/catDataDB.json';

function ProjectsCats() {
  const [selectCat, setSelectCat] = useState('');

  const handleCat = (e) => setSelectCat(e.target.innerHTML);

  return (
    <article className='w-full h-full  flex flex-col items-center justify-center '>
      {/* select cats */}
      <section className='flex items-center justify-between mt-10 flex-wrap w-3/4 max-w-6xl px-4'>
        <p
          onClick={(e) => handleCat(e)}
          className={`${
            selectCat === '' || (selectCat === 'all projects' && 'bg-backFilter')
          } text-mainTxtColor px-3 py-1 my-2 transition duration-500 hover:bg-backFilter cursor-pointer uppercase`}
        >
          all projects
        </p>
        <p
          onClick={(e) => handleCat(e)}
          className={`${
            selectCat === 'RETAIL' && 'bg-backFilter'
          } text-mainTxtColor px-3 py-1 my-2 transition duration-500 hover:bg-backFilter cursor-pointer uppercase`}
        >
          RETAIL
        </p>
        <p
          onClick={(e) => handleCat(e)}
          className={`${
            selectCat === 'CONSULTANCY' && 'bg-backFilter'
          } text-mainTxtColor px-3 py-1 my-2 transition duration-500 hover:bg-backFilter cursor-pointer uppercase`}
        >
          CONSULTANCY
        </p>
        <p
          onClick={(e) => handleCat(e)}
          className={`${
            selectCat === 'CORPORATE' && 'bg-backFilter'
          } text-mainTxtColor px-3 py-1 my-2 transition duration-500 hover:bg-backFilter cursor-pointer uppercase`}
        >
          CORPORATE
        </p>
        <p
          onClick={(e) => handleCat(e)}
          className={`${
            selectCat === 'HOSPITALITY' && 'bg-backFilter'
          } text-mainTxtColor px-3 py-1 my-2 transition duration-500 hover:bg-backFilter cursor-pointer uppercase`}
        >
          HOSPITALITY
        </p>
        <p
          onClick={(e) => handleCat(e)}
          className={`${
            selectCat === 'LANDSCAPING' && 'bg-backFilter'
          } text-mainTxtColor px-3 py-1 my-2 transition duration-500 hover:bg-backFilter cursor-pointer uppercase`}
        >
          LANDSCAPING
        </p>

        {/* select cats */}
      </section>
      {/* /////////////////////////////////////// */}
      {/* render cats */}
      <section className='mt-24 h-full w-full mx-auto'>
        <RenderCats
          selectCat={selectCat === 'all projects' ? ' ' : selectCat}
        />
      </section>
      {/* render cats */}
    </article>
  );
}

export default ProjectsCats;
