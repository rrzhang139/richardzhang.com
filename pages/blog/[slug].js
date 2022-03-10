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
    <section>
      {/* header section */}
      <div className='md:border-b border-stone-300'>
        <div className='px-4 max-w-2xl mx-auto md:px-0'>
          <div className='margin comes here... for_<sm: my-12 for_medium: md:my-28 for_large: lg:my-32'>
            <h1 className='global: text-stone-700 font-serif for_<sm: text-4xl for_medium: md:text-5xl for_large: lg:text-7xl lg:leading-snug '>
              {title}
            </h1>
            <h5 className='text-stone-500  text-sm for large: my-2'>{date}</h5>
            <h4 className='text-stone-500 font-bold for large: my-2'>
              {description}
            </h4>
          </div>
        </div>
      </div>
      {/* blog content section */}
      <div className='px-4 max-w-2xl lg:max-w-4xl mx-auto md:px-0 my-12 md:my-28 lg:my-32'>
        <article className='prose md:my-40 md:px-8 lg:px-0 max-w-5xl'>
          <MDXRemote {...mdxSource} components={components} />
        </article>
      </div>
    </section>
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
