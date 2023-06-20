import { useState } from 'react';

function OurApproach() {
  const [selectItem, setSelectItem] = useState(1);
  const items = [
    {
      id: 1,
      txt: 'open communication',
      desc: `All our projects start with a clear conversation. In this way we gain insights into the building, the people who reside in it, and the needs as well as interests that play a role. We love open communication and try to collect as much information as possible in a pleasant manner until we have a clear picture of all the human, practical, technical and creative aspects involved.`,
    },
    {
      id: 2,
      txt: 'SPATIAL EXPRESSION',
      desc: `Together with our clients, partners and talents, we draw up a program of requirements. We do not tell clients what they should do, but together we determine the best strategy. We then translate this into a clear spatial concept that clearly reflects the identity of a customer. The concept then shows character and tells a story to the various users and /or target groups.`,
    },
    {
      id: 3,
      txt: 'FROM IDEA TO SPACE',
      desc: `
      From the concept, we work out a design, step by step. The phases are:

-Sketch
-Preliminary
-Final
-and sometimes a technical design.

We draw floor plans, details, lighting and installation plans. We conduct material research, propose acoustic solutions, choose products, furniture and upholstery. In short, everything needed for an integral architectural design.
      `,
    },
    {
      id: 4,
      txt: 'REALIZATION',
      desc: 'During the realization of the project, we take the creative direction and guide all implementing parties. We have an extensive team of project managers, contractors, suppliers, and people who guarantee that the project is executed to perfection as assigned. For large scale projects, we often work with partners and consultants not only in the field of sustainability, acoustics, installations, and lighting, but also in collaboration with partner architects, designers and other innovative parties from around the world and within the creative industry.',
    },
  ];

  const pickDesc = items.find((item) => item.id === selectItem);

  const handleItemClick = (id) => setSelectItem(id);

  return (
    <div className='h-fit w-screen bg-ourAppBg bg-no-repeat bg-center bg-fixed'>
      <article className='max-w-6xl mx-auto '>
        <div className='border-b-2 w-full mx-auto my-10'>
          <h1 className='text-4xl text-mainTxtColor text-center pb-10'>
            OUR APPROACH
          </h1>
        </div>
        <section className='my-10 relative '>
          <div className='lg:flex'>
            {items.map((item, idx) => {
              return (
                <div key={item.id} className='h-full w-full my-6  relative'>
                  <div
                    onClick={() => handleItemClick(item.id)}
                    className={`
                  ${
                    pickDesc?.id === item.id
                     && ' bg-slate-400'
                  }
                  w-48 h-48 flex items-center justify-center rounded-full 
                  transition-colors duration-500 cursor-pointer
                  text-mainNavColor hover:text-mainTxtColor
                   bg-mainTxtColor border hover:border-mainNavColor hover:bg-mainNavColor mx-auto
                  `}
                  >
                    <h3 className='text-center my-auto uppercase'>
                      {item.txt}
                    </h3>
                    {pickDesc.id === item.id && (
                      <span className=' hidden lg:block lg:absolute -bottom-1/3 border-x border-4 border-mainTxtColor h-16'></span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <div className='my-10 border-t w-full mx-auto hidden md:block px-4'>
            <p className=' w-full mx-auto text-center text-2xl text-mainTxtColor'>
              {pickDesc.desc}
            </p>
          </div>
        </section>
      </article>
    </div>
  );
}

export default OurApproach;
