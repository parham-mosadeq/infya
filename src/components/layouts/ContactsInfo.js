function ContactsInfo() {
  return (
    <div>
      <h3 className='text-3xl w-1/2'>contact us</h3>
      <div className='text-sm my-7'>
        <p>INFYA Exhibition Stand Fitting and Execution LLC</p>
        <p>Warehouse Number 4, 5, 6</p>
        <p>Dubai Investment Park First</p>
        <p>P.O. Box 390077 – Dubai, UAE</p>
      </div>
      <ul className='text-sm'>
        <li className='w-full border-b mb-1 pb-2'>
          mobile:
          <span className='pl-3'>+971 4 880 8890</span>
        </li>
        <li className='w-full border-b mb-1 pb-2'>
          phone:
          <span className='pl-3'>+971 50 657 0757</span>
        </li>
        <li className='w-full border-b mb-1 pb-2'>
          email:
          <a className='pl-3' href='mailto:/'>
            info@infya.com
          </a>
        </li>
      </ul>
    </div>
  );
}

export default ContactsInfo;
