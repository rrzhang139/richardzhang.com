import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ExternalLink from "../../components/Posts/ExternalLink";
import Figure from "../../components/Posts/Figure";
import Callout from "../../components/Posts/Callout";
import Math from "../../components/Posts/Math";
import Head from "next/head";
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex';
import ImageRow from "../../components/Posts/ImageRow";
import { Bold, Italic, Underline } from "../../components/Posts/TextFormatting";
import { useTheme } from "../../components/ThemeContext";


const proseClasses = (theme) => {
  return [
    "py-20 prose leading-9 font-mavenp",
    theme === "dark" 
      ? "text-neutral-200 prose-headings:text-white prose-a:text-neutral-300 prose-h1:text-white prose-h2:text-white prose-h3:text-neutral-100 prose-h4:text-white prose-h5:text-white prose-h6:text-white prose-*:text-white ul:text-white ol:text-white li:text-white" 
      : "text-neutral-700 prose-headings:text-black prose-a:text-neutral-600 prose-h1:text-black prose-h2:text-black prose-h3:text-neutral-900 prose-h4:text-black prose-h5:text-black prose-h6:text-black prose-*:text-black ul:text-black ol:text-black li:text-black",
    "text-justify prose-invert"
  ].join(" ");
};

const PostPage = ({ mdxSource, frontMatter }) => {
  const { theme } = useTheme();
  
  // Pass theme to Callout component
  const components = {
    ExternalLink,
    Figure,
    Callout: (props) => <Callout {...props} theme={theme} />,
    Math,
    ImageRow,
    Bold,
    Italic,
    Underline,
  };
  
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
          <article className={proseClasses(theme)}>
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
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    },
    scope: frontMatter,
  });

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
