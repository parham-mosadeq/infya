import { useRouter } from 'next/router';
import catDataDB from '../../../data/catDataDB.json';
import Image from 'next/image';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
function OurProjectDetailsPage() {
  const router = useRouter();
  const pid = +router.query.pid?.slice(-1);
  const { prCats } = catDataDB;
  const findByTag = prCats.filter((item) => item.id === pid);
  console.log(findByTag);
  return (
    <section className='h-screen w-full bg-mainAboutColor'>
      <article className='max-w-6xl mx-auto flex flex-col items-center justify-center h-full w-full'>
        {findByTag.map((item) => {
          return (
            <div
              className='w-full h-full flex flex-col lg:flex-row-reverse justify-center items-center py-10'
              key={item.id}
            >
              <div className='mx-auto  h-full flex justify-center items-center w-full'>
                <Image
                  className='h-64 w-3/4 lg:h-96 mx-auto object-cover my-11 rounded-sm'
                  src={item.images}
                  width={550}
                  height={550}
                />
              </div>
              <div className='mx-auto max-w-lg px-4 text-mainTxtColor'>
                <div>
                  <h3 className='text-3xl uppercase mb-4'>{item.imgTitle}</h3>
                </div>
                <div className='text-sm'>{item.fullDesc}</div>

                <div className='block self-start my-10 '>
                  <p className='flex justify-start items-center gap-2 capitalize'>
                    share:{' '}
                    <span className='hover:bg-backFilter cursor-pointer hover:text-mainAboutColor transition duration-300 border text-sm p-1 rounded-full'>
                      <FaFacebookF className='bg-transparent'/>
                    </span>{' '}
                    <span className='hover:bg-backFilter cursor-pointer hover:text-mainAboutColor transition duration-300 border text-sm p-1 rounded-full'>
                      <FaTwitter className='bg-transparent'/>
                    </span>{' '}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </article>
    </section>
  );
}

export default OurProjectDetailsPage;
