function BlogGif({ iframeSrc, aHref }) {
  return (
    <>
      <iframe
        src={iframeSrc}
        width='480'
        height='360'
        frameBorder='0'
        className='giphy-embed'
      ></iframe>
      <p>
        <a href={aHref} target='_blank' rel='noopener noreferrer'>
          via GIPHY
        </a>
      </p>
    </>
  );
}

export default BlogGif;
