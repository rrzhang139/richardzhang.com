import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Container from "../../components/Container/Container";
import Head from "next/head";

const Home = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Writing | Richard Zhang</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Random thoughts on life"
        ></meta>
        <meta
          property="og:description"
          content="Random thoughts on life"
          key="ogdesc"
        />
      </Head>

      <div className="max-w-2xl mx-auto mt-8 tracking-wider font-text px-5 md:px-0">
        <h1 className="pb-9">Writing</h1>
        <h3 className="text-sm pb-9">
            Random ramblings on life
        </h3>
        <hr className="pb-9"></hr>


        <ul className="list-inside list-disc">
          {posts.map((post, index) => (
            <li key={index} className="font-text text-sm w-full mb-8">
              <span className="truncate hover:underline">
                <Link href={`/writing/${post.slug}`}>
                  {post.frontMatter.title}
                </Link>
              </span>
              <span className="hidden md:inline float-right">
                {post.frontMatter.date}
              </span>
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
  
  const sortedPosts = posts.sort((a, b) => {
    const dateA = new Date(a.frontMatter.date);
    const dateB = new Date(b.frontMatter.date);
    return dateB - dateA; // Sort descending (newest first)
  });

  return {
    props: {
      posts: sortedPosts,
    },
  };
};

export default Home;
