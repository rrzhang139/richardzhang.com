import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import SyntaxHighlighter from "react-syntax-highlighter";

import { Button } from "../../components";

const components = { Button, SyntaxHighlighter };

const PostPage = ({ frontMatter: { title, date, description }, mdxSource }) => {
  return (
    <article className='prose px-5 md:px-0 max-w-2xl mx-auto my-6 md:my-20'>
      <div className='mt-4'>
        <h1 className=''>{title}</h1>
        <p className='-mt-6 italic'>{description}</p>
        <section className='mt-10'>
          <MDXRemote {...mdxSource} components={components} />
        </section>
      </div>
    </article>
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
