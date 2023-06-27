import { useState } from 'react';
import RenderCats from './RenderCats';
import catDataDB from '../../../../data/catDataDB.json';

function ProjectsCats() {
  const [selectCat, setSelectCat] = useState('ALL PROJECTS');
  const handleCat = (tags) => setSelectCat(tags);
  const { prCats } = catDataDB;
  const cats = prCats.map((item) => item.catName);
  const cat = [...new Set(cats)];
  const ids = prCats.map((item) => item.id);

  return (
    <article className='w-full h-full  flex flex-col items-center justify-center '>
      {/* select cats */}
      <section className='flex items-center justify-center lg:justify-between mt-10 flex-wrap w-3/4 max-w-6xl px-4'>
        <p
          onClick={() => setSelectCat('ALL PROJECTS')}
          className={`${
            selectCat === 'ALL PROJECTS' && 'bg-backFilter'
          } text-mainTxtColor px-3 py-1 hover:bg-backFilter cursor-pointer uppercase`}
        >
          ALL PROJECTS
        </p>

        {cat.map((item, idx) => (
          <p
            onClick={() => handleCat({ id: ids[idx + 1], tag: item })}
            className={`${
              selectCat.id === ids[idx + 1] ? 'bg-backFilter' : ''
            } hover:bg-backFilter px-3 py-1 transition duration-500 cursor-pointer text-mainTxtColor uppercase`}
            key={item}
          >
            {item}
          </p>
        ))}
        {/* select cats */}
      </section>

      {/* render cats */}
      <section className='mt-24 h-full w-full mx-auto'>
        <RenderCats selectCat={selectCat === 'ALL PROJECTS' ? '' : selectCat} />
      </section>
      {/* render cats */}
    </article>
  );
}

export default ProjectsCats;
