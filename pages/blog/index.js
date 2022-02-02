import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { SearchIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";

export async function getStaticProps() {
  const data = [
    {
      title: "Next.js | TailwindCSS | MDX Blog Starter Template",
      author: "Can Toraman",
      date: "February 2nd 2022",
      image: "https://www.mindfusion.eu/screenshots/gallery5_net_pro.jpg",
      imageAlt: "Next.js MDX Tailwind CSS blog was never this easy.",
      intro:
        "Next.js | Tailwind CSS | MDX Blog starter template, simplified for you!",
      path: "/blog/posts/nextjs-tailwind-css-mdx-blog-starter-template",
    },
  ];
  return {
    props: {
      data,
    },
  };
}

export default function Blog({ data }) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    setPosts(data);
  }, [data]);
  return (
    <div className='box-border p-5'>
      <Layout>
        <div className='mx-auto w-96 mt-1 relative rounded-md shadow-sm'>
          <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
            <SearchIcon className='h-5 w-5 text-gray-400' aria-hidden='true' />
          </div>
          <input
            type='text'
            name='text'
            id='text'
            className='focus:ring-purple-400 focus:border-purple-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md'
            placeholder='Oh! Not working yet!'
            autoComplete='off'
          />
        </div>
        <section className='bg-white'>
          <div className='px-8 py-10 mx-auto lg:max-w-screen-xl sm:max-w-xl md:max-w-full sm:px-12 md:px-16 lg:py-20 sm:py-16'>
            <div className='grid gap-x-8 gap-y-12 sm:gap-y-16 md:grid-cols-2 lg:grid-cols-3'>
              {posts.map((post, index) => (
                <div className='relative' key={index}>
                  <a
                    href='#_'
                    className='block overflow-hidden group rounded-xl'
                  >
                    <Image
                      src='/assets/test.png'
                      alt='Picture of the author'
                      width={500}
                      height={500}
                      className='object-cover w-full h-56 transition-all duration-300 ease-out sm:h-64 group-hover:scale-105'
                    />
                  </a>
                  <div className='relative mt-5'>
                    <p
                      className='uppercase text-xs mb-2.5 bg-purple-400 text-white px-1 font-extrabold'
                      style={{ width: "fit-content" }}
                    >
                      {post.date}
                    </p>
                    <Link href={post.path}>
                      <a className='block mb-3 hover:underline'>
                        <h2 className='text-2xl font-bold leading-8 text-black transition-colors duration-200 hover:text-deep-purple-accent-700 truncate'>
                          {post.title}
                        </h2>
                      </a>
                    </Link>

                    <p className='mb-4 text-gray-700'>{post.intro}</p>
                    <a href='#_' className='underline'>
                      Read More
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
}
