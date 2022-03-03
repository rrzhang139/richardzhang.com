import Link from "next/link";

const Navbar = () => {
  return (
    <div className='md:px-0 max-w-2xl mx-auto'>
      <div className='px-4 md:px-0 py-5 flex justify-between flex-wrap'>
        <Link href='/'>
          <a>
            <h2 className='text-lg self-center'>cantoramann</h2>
          </a>
        </Link>
        <ul className='self-center flex text-sm sm:text-base mt-1 sm:mt-0 w-full sm:max-w-min sm:justify-start'>
          <Link href='/experience'>
            <a>
              <li className='md:ml-6'>Experience</li>
            </a>
          </Link>
          <Link href='/projects'>
            <a>
              <li className='ml-6'>Projects</li>
            </a>
          </Link>
          <Link href='/blog'>
            <a>
              <li className='ml-6'>Blog</li>
            </a>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
