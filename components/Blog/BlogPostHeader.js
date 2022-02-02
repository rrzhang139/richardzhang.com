function MetadataComponent({ meta }) {
  return (
    <div className='pb-2 border-b'>
      <h1 className='mb-0'>{meta.title || "No Title Provided"}</h1>
      <p className='mt-2'>{meta.series}</p>
      <div className='-mt-4'>
        <span className='self-center text-sm'>{meta.author}</span>
        <br />
        <span className='self-center text-sm'>{meta.date}</span>
      </div>
    </div>
  );
}

export default MetadataComponent;
