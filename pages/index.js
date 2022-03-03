import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className='mt-16 md:mt-32 px-4 md:px-0 max-w-2xl mx-auto mb-10'>
      <h3
        className='text-8xl font-semibold'
        style={{
          fontFamily: "Redressed, cursive",
        }}
      >
        Can Toraman
      </h3>

      <div className='py-6 text-sm'>
        <div className='py-4 tracking-wider leading-9'>
          <p className=''>
            Backend & networks. Also basketball, photography & movies.
          </p>
          <p>
            Computer science third-year @{" "}
            <a
              href='https://www.cs.usc.edu/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-indigo-500 font-semibold'
            >
              University of Southern California
            </a>
            .
          </p>
          <p>
            Previosuly backend @{" "}
            <a
              href='https://www.getir.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-indigo-500 font-semibold'
            >
              Getir
            </a>
          </p>

          <p className='underline hover:cursor-pointer'>
            <a
              href='/assets/Can_Toraman_SWE_Intern_Resume.pdf'
              download='Can_Toraman_SWE_Intern_Resume.pdf'
            >
              Download Resume
            </a>
          </p>
        </div>
        <div id='social' className='py-4 flex text-base'>
          <a
            href='https://www.linkedin.com/in/cantoraman/'
            target='_blank'
            rel='noopener noreferrer'
            className='px-2 py-1 border mr-3'
          >
            Linkedin
          </a>
          <a
            href='https://github.com/cantoramann'
            target='_blank'
            rel='noopener noreferrer'
            className='px-2 py-1 border mr-3'
          >
            GitHub
          </a>
          <a
            href='https://twitter.com/cantoramann'
            target='_blank'
            rel='noopener noreferrer'
            className='px-2 py-1 border mr-3'
          >
            Twitter
          </a>
          <a
            href='https://superpeer.com/cantoramann'
            target='_blank'
            rel='noopener noreferrer'
            className='px-2 py-1 border mr-3'
          >
            Superpeer
          </a>
        </div>
      </div>
    </div>
  );
}
