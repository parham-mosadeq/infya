function GetInTouch() {
  return (
    <main className='max-w-6xl mx-auto'>
      <form className='h-screen px-4 pt-20 ' action='#'>
        <div className='flex flex-col justify-center items-center'>
          <label
            className='self-start uppercase font-bold tracking-wider'
            htmlFor='name'
          >
            name
          </label>
          <input
            required={true}
            type='text'
            name='name'
            className='border-2 border-mainNavColor focus:outline-none w-full'
          />
        </div>
        <div className='flex flex-col justify-center items-center'>
          <label
            className='self-start uppercase font-bold tracking-wider'
            htmlFor='email'
          >
            email
          </label>
          <input
            required={true}
            type='text'
            name='email'
            className='border-2 border-mainNavColor focus:outline-none w-full'
          />
        </div>
        <div className='flex flex-col justify-center items-center'>
          <label
            className='self-start uppercase font-bold tracking-wider'
            htmlFor='phone'
          >
            phone
          </label>
          <input
            required={true}
            type='text'
            name='phone'
            className='border-2 border-mainNavColor focus:outline-none w-full'
          />
        </div>
        <div className='flex flex-col justify-center items-center'>
          <label
            className='self-start uppercase font-bold tracking-wider'
            htmlFor='message'
          >
            message
          </label>
          <textarea
            cols='60'
            rows='40'
            type='text'
            name='name'
            className='border-2 border-mainNavColor focus:outline-none h-28 w-full'
          />
        </div>

        <button
          type='submit'
          className='my-3 border px-9 w-full bg-mainNavColor text-mainTxtColor
           uppercase font-medium tracking-widest py-1
           transition duration-300 hover:bg-backFilter
           lg:w-1/2 lg:mx-auto
           '
        >
          submit
        </button>
      </form>
    </main>
  );
}

export default GetInTouch;
