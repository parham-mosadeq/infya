function ContactUsProfile() {
  return (
    <>
      <div className=' relative h-36'>
        <div className='h-36 w-full block  '>
          <div
            className='block object-cover bg-fixed
            h-full blur-[2px] bg-contactUsBg'
          ></div>
        </div>
        <div>
          <p className=' absolute text-3xl font-bold tracking-wider text-mainTxtColor -translate-y-[100px] translate-x-[18px] lg:-translate-y-[100px] lg:translate-x-[120px] '>
            Contact us
          </p>
        </div>
      </div>
    </>
  );
}

export default ContactUsProfile;
