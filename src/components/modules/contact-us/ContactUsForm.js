function ContactUsForm() {
  return (
    <>
      <form
        action='#'
        className='w-full h-fit flex flex-col items-center justify-center'
      >
        {/* name */}
        <div className='w-full '>
          <input
            className='bg-mainFooterColor text-mainTxtColor 
          border-none pl-4 py-4 my-4 w-full
          focus:border-none focus:outline-none capitalize
          '
            type='text'
            placeholder='name'
            required={true}
          />
        </div>
        {/* name */}
        {/* email */}
        <div className='w-full'>
          <input
            className='bg-mainFooterColor text-mainTxtColor 
          border-none pl-4 py-4 my-4 w-full
          focus:border-none focus:outline-none capitalize
          '
            type='email'
            placeholder='email'
            required={true}
          />
        </div>
        {/* email */}
        {/* phone */}
        <div className='w-full'>
          <input
            className='bg-mainFooterColor text-mainTxtColor 
          border-none pl-4 py-4 my-4 w-full
          focus:border-none focus:outline-none capitalize
          '
            type='text'
            placeholder='phone'
            required={true}
          />
        </div>
        {/* phone */}
        {/* message */}
        <div className='w-full'>
          {/* <input
            className='bg-mainFooterColor text-mainTxtColor 
          border-none pl-4 py-4 my-4 w-full h-36 text-center focus:border-none focus:outline-none capitalize
          '
            type='text'
            placeholder='message'
            required={true}
          /> */}
          <textarea
            className='bg-mainFooterColor text-mainTxtColor 
          border-none pl-4 py-4 my-4 w-full h-36  focus:border-none focus:outline-none capitalize
          '
            name='message'
            cols='60'
            rows='40'
            placeholder='message'
          ></textarea>
        </div>
        {/* message */}
        <button
          type='submit'
          className='self-start hover:bg-mainNavColor hover:border-mainNavColor transition duration-700 bg-inherit text-sm border px-7 py-1 my-5 uppercase text-mainTxtColor font-light tracking-wider'
        >
          submit form
        </button>
      </form>
    </>
  );
}

export default ContactUsForm;
