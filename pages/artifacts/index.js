import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Learning Artifacts | Richard Zhang</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="New-found self-awareness and the magic of matching my talents and inclinations to the world"
        ></meta>
        <meta
          property="og:description"
          content="New-found self-awareness and the magic of matching my talents and inclinations to the world"
          key="ogdesc"
        />
      </Head>

      <div className="max-w-2xl mx-auto mt-8 tracking-wider font-text px-5 md:px-0">
        <h1 className="pb-9">Learning Artifacts</h1>
        <h3 className="text-sm pb-9">
          Matching my talents and inclinations to the world. <a
                  className="hover:text-blue-400 transition-colors underline"
                  href="https://manual.withcompound.com/chapters/finding-person-problem-fit"
                  rel="noreferrer"
                  target="_blank"
          >Inspiration
          </a>
        </h3>
        <hr className="pb-9"></hr>

        <a
                  className="hover:text-blue-400 transition-colors underline"
                  href=" https://richord.notion.site/Artifacts-of-My-Learnings-e4abbbe77e6447a4a5b25a483b8ee085?pvs=4"
                  rel="noreferrer"
                  target="_blank"
          > Click Here to View the Artifacts
          </a>
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
