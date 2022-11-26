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
        <title>Writing | Can Toraman</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Opinions on philosophical and technical aspects of the software industry."
        ></meta>
        <meta
          property="og:description"
          content="Opinions on philosophical and technical aspects of the software industry."
          key="ogdesc"
        />
      </Head>

      <Container title="Writing">
        <ul className="">
          {posts.map((post, index) => (
            <li
              key={index}
              className="font-text text-sm text-stone-400 hover:text-white transition-colors ease-in duration-300 hover:cursor-pointer py-3 border-b border-b-neutral-700 hover:border-b-neutral-500"
            >
              <Link
                href={`writing/${post.frontMatter.slug}`}
                passHref
                className="hover:cursor-pointer"
              >
                <div className="flex justify-between">
                  <h3 className="w-fit">{post.frontMatter.title}</h3>
                  <p>{post.frontMatter.date}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
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
