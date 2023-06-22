import { useRouter } from 'next/router';
import ourDesign from '../../../../data/ourDesDB.json';
import Image from 'next/image';
function DesignDetails() {
  const { asPath } = useRouter();
  const { designs } = ourDesign;
  const itemId = +asPath[asPath.length - 1];
  const headTitle = asPath.split('/')[2].split('-').slice(0, -1).join(' ');
  const selectedDesign = designs.filter((item) => item.id === itemId);
  console.log(selectedDesign);
  return (
    <section className='bg-mainAboutColor min-h-screen w-full'>
      <div className='h-48  bg-fixed flex items-center justify-center w-full bg-ourAppBg bg-no-repeat bg-center bg-cover'>
        {/* title */}
        <div className='px-2 w-full text-mainTxtColor max-w-6xl '>
          <h1 className='text-2xl uppercase '>{headTitle}</h1>
        </div>
        {/* title */}
        <div>
          <p className='text-sm hidden text-mainTxtColor capitalize lg:block px-2'>
            <span>home</span>/<span>our services/</span>
            <span>{headTitle}</span>
          </p>
        </div>
      </div>

      <article className='max-w-6xl mx-auto flex items-center justify-center flex-col px-4 py-10'>
        {selectedDesign.map((item) => {
          return (
            <div
              key={item.id}
              className='  h-full w-full  grid gap-5 lg:grid-cols-2 text-mainTxtColor'
            >
              <div className=' my-10 text-sm lg:text-lg leading-7 font-light'>
                <p>{item.desc}</p>
              </div>
              <div className='w-full h-full'>
                <Image
                  className='w-full object-cover my-10 '
                  src={item.image}
                  width={320}
                  height={320}
                  alt={item.title}
                />
              </div>
              <div>
                <p>{item.fullDesc}</p>
              </div>
            </div>
          );
        })}
      </article>
    </section>
  );
}

export default DesignDetails;
