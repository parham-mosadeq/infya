function NotFound() {
  return (
    <div className='h-screen flex justify-center items-center'>
      <h1 className='text-5xl px-4 text-center capitalize font-extrabold'>
        the page your looking for is not here :({' '}
        <span className='block font-thin my-3'>Please try another page</span>{' '}
      </h1>
    </div>
  );
}

export default NotFound;
