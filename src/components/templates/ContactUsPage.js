import ContactsInfo from '../layouts/ContactsInfo';
import ContactUsForm from '../modules/contact-us/ContactUsForm';

function ContactUsPage() {
  return (
    <div className=' min-h-screen mx-auto w-full bg-mainAboutColor'>
      <div className='px-4 max-w-6xl mx-auto  w-full'>
        <h1 className='text-mainTxtColor capitalize py-10 font-light tracking-widest text-xl'>
          send a message
        </h1>
        <div className='lg:flex lg:justify-center lg:items-center lg:gap-x-16'>
          <div className='mx-10'>
            <ContactUsForm />
          </div>
          <div className='h-fit pb-10 mx-10 self-start justify-items-end'>
            <ContactsInfo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUsPage;
