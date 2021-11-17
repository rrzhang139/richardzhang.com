import Link from "next/link";

const Navbar = () => {
  const svgSize = 35;
  return (
    <nav className='m-auto w-auto sm:w-max p-4 font-yusei border-black border-b-8 border-opacity-10 mb-10'>
      <Link href='/'>
        <a>
          <h1 className='text-4xl text-center mb-5'>Can Toraman</h1>
        </a>
      </Link>

      <ul className='flex xs:flex-wrap xs:justify-center xs:text-center'>
        <li className='mx-4 xs:w-1/3 xs:py-3 md:py-0 md:w-auto'>
          <Link href='/about'>
            <a>
              About <span>&rarr;</span>
            </a>
          </Link>
        </li>
        <li className='mx-4 xs:w-1/3 xs:py-3 md:py-0 md:w-auto'>
          <Link href='/projects'>
            <a>
              Projects <span>&rarr;</span>
            </a>
          </Link>
        </li>
        <li className='mx-4 xs:w-1/3 md:w-auto'>
          <a
            href='/assets/Can_Toraman_SWE_Intern_Resume.pdf'
            download='Can_Toraman_SWE_Intern_Resume.pdf'
          >
            Resume
            <span>&rarr;</span>
          </a>
        </li>
        <li className='mx-4 xs:w-1/3 md:w-auto'>
          <Link href='/articles'>
            <a>
              Articles <span>&rarr;</span>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
