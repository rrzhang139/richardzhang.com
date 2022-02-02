import Link from "next/link";

const Navbar = () => {
  const svgSize = 35;
  return (
    <nav className='m-auto w-auto sm:w-max p-4 mb-10'>
      <Link href='/'>
        <a>
          <h1 className='text-2xl text-center mb-5'>cantoraman</h1>
        </a>
      </Link>

      <ul className='flex xs:flex-wrap xs:justify-center xs:text-center text-sm'>
        <li className='mx-4 xs:w-1/3 xs:py-3 md:py-0 md:w-auto'>
          <Link href='/about'>
            <a className='flex justify-center'>
              <p>about</p>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='pl-1 h-6 w-5'
                fill='black'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={1}
                  d='M17 8l4 4m0 0l-4 4m4-4H3'
                />
              </svg>
            </a>
          </Link>
        </li>
        <li className='mx-4 xs:w-1/3 xs:py-3 md:py-0 md:w-auto'>
          <Link href='/projects'>
            <a className='flex justify-center'>
              <p>projects</p>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='pl-1 h-6 w-5'
                fill='black'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={1}
                  d='M17 8l4 4m0 0l-4 4m4-4H3'
                />
              </svg>
            </a>
          </Link>
        </li>
        <li className='mx-4 xs:w-1/3 md:w-auto'>
          <a
            href='/assets/Can_Toraman_SWE_Intern_Resume.pdf'
            download='Can_Toraman_SWE_Intern_Resume.pdf'
            className='flex justify-center'
          >
            <p>resume</p>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='pl-1 h-6 w-5'
              fill='black'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={1}
                d='M17 8l4 4m0 0l-4 4m4-4H3'
              />
            </svg>{" "}
          </a>
        </li>
        <li className='mx-4 xs:w-1/3 md:w-auto'>
          <Link href='/blog'>
            <a className='flex justify-center'>
              <p>blog</p>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='pl-1 h-6 w-5'
                fill='black'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={1}
                  d='M17 8l4 4m0 0l-4 4m4-4H3'
                />
              </svg>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
