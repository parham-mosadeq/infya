function CopyRight() {
  const currentYear = new Date().getFullYear().toString();
  return (
    <div className=' bg-mainNavColor h-36 w-full'>
      <p className='mt-4 max-w-6xl text-center mx-auto'>
        &copy; copyright {currentYear} - INFYA{' '}
      </p>
    </div>
  );
}

export default CopyRight;
