import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ExternalLink from "../../components/Posts/ExternalLink";
import Head from "next/head";

const components = {
  ExternalLink,
};

const proseClasses = () => {
  return [
    "py-20 prose prose-invert leading-9 font-mavenp text-neutral-700 prose-headings:text-black prose-a:text-neutral-600 prose-h1:text-black prose-h2:text-black prose-h3:text-neutral-900 prose-h4:text-black prose-h5:text-black prose-h6:text-black text-justify prose-*:text-black ul:text-black ol:text-black li:text-black",
  ].join(" ");
};

const PostPage = ({ mdxSource, frontMatter }) => {
  return (
    <>
      <Head>
        <title>{frontMatter.title} | Richard Zhang</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={frontMatter.description}></meta>
        <meta
          property="og:description"
          content={frontMatter.description}
          key="ogdesc"
        />
      </Head>
      <section className="space-y-10">
        <section className="max-w-xl px-12 mx-auto lg:px-0">
          <article className={proseClasses()}>
            <MDXRemote {...mdxSource} components={components} />
          </article>
          {/* </div> */}
        </section>
      </section>
    </>
  );
};

const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".mdx"),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  };
};

export { getStaticProps, getStaticPaths };
export default PostPage;
