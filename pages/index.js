import Link from "next/link";
import Image from "next/image";

const svgSize = 24;

export default function Home() {
  return (
    <div>
      <div className='h-screen flex flex-col justify-center font-light'>
        <nav className='m-auto h-screen flex flex-col justify-center'>
          <h1
            className='text-7xl sm:text-9xl tracking-wider text-center'
            style={{ fontFamily: "Caveat" }}
          >
            Can Toraman
          </h1>
          <div className='text-center pt-2'>
            <p className='text-center pt-7 pb-4 text-4xl'>
              computer science @{" "}
              <a
                href='https://www.usc.edu/'
                style={{ color: "#990000" }}
                className='text-opacity-100'
                target='_blank'
                rel='noopener noreferrer'
              >
                <span className='tracking-wider'>usc&apos; 23</span>
              </a>
            </p>
            <p className='text-lg'>backend dev, mostly</p>
          </div>
          <ul className='mt-14 flex justify-center xs:flex-wrap xs:justify-center xs:text-center mx-center'>
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
                </svg>
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

          <ul className='flex justify-center flex-wrap mt-6'>
            <li className='mx-2 flex'>
              <a
                href='https://www.linkedin.com/in/cantoraman/'
                target='_blank'
                rel='noopener noreferrer'
                className='flex'
              >
                <Image
                  src='/assets/svg/linkedin.svg'
                  alt='Picture of the author'
                  width={svgSize - 5}
                  height={svgSize - 5}
                  className='self-center'
                />
              </a>
            </li>
            <li className='mx-2'>
              <a
                href='https://github.com/cantoramann'
                target='_blank'
                rel='noopener noreferrer'
                className='flex'
              >
                <Image
                  src='https://img.icons8.com/ios-glyphs/30/000000/github.svg'
                  alt='Picture of the author'
                  width={svgSize}
                  height={svgSize}
                  className='self-center'
                />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
