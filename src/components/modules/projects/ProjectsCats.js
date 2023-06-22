import { useState } from 'react';
import RenderCats from './RenderCats';

function ProjectsCats() {
  const [selectCat, setSelectCat] = useState('all projects');
  const prCats = [
    { id: 1, catName: 'all projects' },
    { id: 2, catName: 'CONSULTANCY' },
    { id: 3, catName: 'CORPORATE' },
    { id: 4, catName: 'HOSPITALITY' },
  ];

  const handleCat = (id) => setSelectCat(id);

  return (
    <article className='w-full h-full  flex flex-col items-center justify-center '>
      {/* select cats */}
      <section className='flex items-center justify-between flex-wrap w-3/4 max-w-6xl px-4'>
        {prCats.map((item) => (
          <p
            onClick={() => handleCat(item.catName)}
            className={`${
              selectCat === item.catName ? 'bg-slate-600' : ''
            } hover:bg-slate-600 px-3 py-1 transition duration-500 cursor-pointer text-mainTxtColor uppercase`}
            key={item.id}
          >
            {item.catName}
          </p>
        ))}
        {/* select cats */}
      </section>

      {/* render cats */}
      <section className='mt-24 h-full w-full mx-auto'>
        <RenderCats selectCat={selectCat} />
      </section>
      {/* render cats */}
    </article>
  );
}

export default ProjectsCats;
