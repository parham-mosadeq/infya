import { useState } from 'react';
import RenderCats from './RenderCats';
import catDataDB from '../../../../data/catDataDB.json';

function ProjectsCats() {
  const [selectCat, setSelectCat] = useState('');

  const handleCat = (id) => setSelectCat(id);
  const { prCats } = catDataDB;
  const cat = new Set();

  return (
    <article className='w-full h-full  flex flex-col items-center justify-center '>
      {/* select cats */}
      <section className='flex items-center justify-between mt-10 flex-wrap w-3/4 max-w-6xl px-4'>
        <p
          onClick={() => setSelectCat('')}
          className={`${
            selectCat === '' && 'bg-slate-600'
          } text-mainTxtColor px-3 py-1 hover:bg-slate-600 cursor-pointer uppercase`}
        >
          all projects
        </p>
        {prCats.map((item) => {
          // removing duplicated cats
          cat.add(item.catName);
          console.log([cat]);
          return (
            <p
              onClick={() => handleCat(item.catName)}
              className={`${
                selectCat === item.catName ? 'bg-slate-600' : ''
              } hover:bg-slate-600 px-3 py-1 transition duration-500 cursor-pointer text-mainTxtColor uppercase`}
              key={item.id}
            >
              {item.catName}
            </p>
          );
        })}

        {/* select cats */}
      </section>

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
