import Link from "next/link";

const Intro = () => {
  const svgSize = 24;
  return (
    <nav
      className='m-auto h-screen flex flex-col justify-center'
      style={{ fontFamily: "Lato" }}
    >
      <h1
        className='text-8xl tracking-wider text-center'
        style={{ fontFamily: "Noto Serif JP" }}
      >
        can toraman
      </h1>
      <div className='text-center pt-2'>
        <p className='text-center pt-7 pb-4 text-4xl'>
          computer science @{" "}
          <a
            href='https://www.usc.edu/'
            style={{ color: "#990000" }}
            className='text-opacity-100'
            target='_blank'
          >
            <span className='tracking-wider'>usc' 23</span>
          </a>
        </p>
        <p className='text-lg font-semibold'>
          backend dev | systems design & cloud | autonomous systems
        </p>
      </div>
      <ul className='pt-14 flex xs:flex-wrap xs:justify-center xs:text-center font-semibold'>
        <li className='mx-4 xs:w-1/3 xs:py-3 md:py-0 md:w-auto'>
          <Link href='/about'>
            <a className='flex'>
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
            <a className='flex'>
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
            className='flex'
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
            </svg>
          </a>
        </li>
        <li className='mx-4 xs:w-1/3 md:w-auto'>
          <Link href='/articles'>
            <a className='flex'>
              <p>articles</p>
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

      <ul className='flex justify-center flex-wrap pt-6'>
        <li className='mx-2 flex'>
          <a
            href='https://www.linkedin.com/in/cantoraman/'
            target='_blank'
            className='flex'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              viewBox='0 0 24 24'
              className='self-center'
            >
              <path d='M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z' />
            </svg>
          </a>
        </li>
        <li className='mx-2'>
          <a
            href='https://github.com/cantoramann'
            target='_blank'
            className='flex'
          >
            <img
              src='https://img.icons8.com/ios-glyphs/30/000000/github.svg'
              height={svgSize}
              width={svgSize}
              className='self-center'
            />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Intro;
