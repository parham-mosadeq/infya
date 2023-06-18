function CopyRight() {
  const currentYear = new Date().getFullYear().toString();
  return (
    <div className='bg-mainNavColor h-36 w-full'>
      <p className='mt-4 ml-5'>&copy; copyright {currentYear} - INFYA </p>
    </div>
  );
}

export default CopyRight;
