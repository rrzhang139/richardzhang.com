const projects = [
  {
    name: "Study On USC",
    type: "Individual",
    desc: "Building USC's premier application for students to create study groups for their classes.",
    launchDate: "Mar 5, 2022",
    stack: [
      {
        name: "Node.js",
        src: "/assets/js.gif",
      },
      {
        name: "Svelte",
        src: "/assets/svelte.png",
      },
    ],
  },
  {
    name: "Pacman",
    desc: "You know what it is!",
    date: "October 2020",
    stack: [
      {
        name: "C++",
        src: "/assets/cpp.png",
      },
    ],
  },
];
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";
import { SearchIcon } from "@heroicons/react/solid";
import { useState, useEffect } from "react";

const Home = ({ posts }) => {
  const [searchedPosts, setSearchedPosts] = useState([]);
  useEffect(() => {
    setSearchedPosts(posts);
  }, []);

  const onSearch = (e) => {
    const { value } = e.target;
    if (value.trim() === "") {
      setSearchedPosts(posts);
    } else {
      setSearchedPosts(
        posts.filter(
          (post) =>
            post.frontMatter.title
              .toLowerCase()
              .includes(value.toLowerCase()) ||
            post.frontMatter.description
              .toLowerCase()
              .includes(value.toLowerCase())
        )
      );
    }
  };
  return (
    <>
      <section className='mt-16 px-4 md:px-0 max-w-2xl mx-auto mb-10'>
        <div className='flex justify-between'>
          <h2
            className='text-5xl font-semibold'
            style={{
              fontFamily: "Redressed, cursive",
            }}
          >
            Blog Posts
          </h2>
          <div>
            <div className='relative rounded-md shadow-sm'>
              <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                <SearchIcon
                  className='h-5 w-5 text-gray-400'
                  aria-hidden='true'
                />
              </div>
              <input
                type='email'
                name='email'
                id='email'
                className='focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md'
                placeholder='Search Posts'
                autoComplete='off'
                onChange={onSearch}
              />
            </div>
          </div>
        </div>
      </section>
      <div className='mt-20 px-4 md:px-0 max-w-2xl mx-auto mb-10'>
        <ul className='mt-10'>
          {searchedPosts.map((post, index) => (
            <li className='my-4 hover:cursor-pointer'>
              <Link href={"/blog/" + post.slug} passHref key={index}>
                <div className='flex px-2 py-4 bg-slate-50 rounded-lg'>
                  <img
                    src={post.frontMatter.thumbnailUrl}
                    className='h-14 w-14 md:h-20 md:w-20 rounded-full'
                  />
                  <div className='ml-6 self-center'>
                    <h2 className='text-lg'>{post.frontMatter.title}</h2>
                    <p className='text-sm text-gray-600'>
                      {post.frontMatter.description}
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      frontMatter,
      slug: filename.split(".")[0],
    };
  });

  return {
    props: {
      posts,
    },
  };
};

export default Home;
/*
<ul className='py-10'>
  {projects.map((p) => (
    <li className='py-6'>
      <h3 className='text-lg'>{p.name}</h3>
      <div className='mt-1 text-sm'>
        <p className=''>{p.desc}</p>
        {p.launchDate && (
          <p className='mt-1 text-indigo-600 text-xs'>
            Launching on {p.launchDate}
          </p>
        )}
        {/* {p.date && <p className='text-indigo-600'>{p.date}</p>} */
//     </div>
//     <ul className='mt-5 flex'>
//       {p.stack.map((s) => (
//         <li className='mr-4'>
//           <img src={s.src} className='mx-auto w-8 h-8' />
//           <p className='pt-1 text-black text-xs w-full text-center'>
//             {s.name}
//           </p>
//         </li>
//       ))}
//     </ul>
//   </li>
// ))}
// </ul>;/*
