import { useState } from 'react';

function OurApproach() {
  const [selectItem, setSelectItem] = useState(1);
  const items = [
    {
      id: 1,
      txt: 'Clear Communication',
      desc: `All our projects start with an open and clear conversation. In this way, we gain insights into the building, the people who reside in it, and the needs as well as interests that play a role. We try to collect as much information as possible in a gracious manner until we have a clear picture of all the human, practical, technical, and creative aspects involved.`,
    },
    {
      id: 2,
      txt: 'Designing Your Space',
      desc: `Together with our clients, partners, and talents, we draw up a program of requirements. We do not tell clients what they should do, but together we determine the best strategy. We then translate this into a clear Structural concept that clearly reflects the identity of a customer. `,
    },
    {
      id: 3,
      txt: 'Reality',
      desc: `During the attainment of the project, we take the creative direction and guide all implementing parties. We have an extensive team of project managers, contractors, suppliers, and people who guarantee that the project is executed to perfection as assigned.`,
    },
    // {
    //   id: 4,
    //   txt: 'REALIZATION',
    //   desc: 'During the realization of the project, we take the creative direction and guide all implementing parties. We have an extensive team of project managers, contractors, suppliers, and people who guarantee that the project is executed to perfection as assigned. For large scale projects, we often work with partners and consultants not only in the field of sustainability, acoustics, installations, and lighting, but also in collaboration with partner architects, designers and other innovative parties from around the world and within the creative industry.',
    // },
  ];

  const pickDesc = items.find((item) => item.id === selectItem);

  const handleItemClick = (id) => setSelectItem(id);

  return (
    // because of no-repeat our background doesn't stretch through whole screen
    // <div className='h-full bg-ourAppBg w-full bg-no-repeat bg-center bg-fixed'>
    // this one has a color as background not picture
    <div className='h-full bg-mainFooterColor w-full bg-no-repeat bg-center bg-fixed'>
      <article className='max-w-6xl mx-auto '>
        <div className='border-b-2 w-full mx-auto  py-10'>
          <h1 className='text-4xl text-mainTxtColor text-center pb-10'>
            OUR APPROACH
          </h1>
        </div>
        <section className='py-10 relative '>
          <div className='lg:flex'>
            {items.map((item, idx) => {
              return (
                <div key={item.id} className='h-full w-full my-6  relative'>
                  <div
                    onClick={() => handleItemClick(item.id)}
                    className={`
                  ${pickDesc?.id === item.id && ' bg-slate-400'}
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
            <p className=' w-full py-7 mx-auto text-center text-2xl text-mainTxtColor'>
              {pickDesc.desc}
            </p>
          </div>
        </section>
      </article>
    </div>
  );
}

export default OurApproach;
