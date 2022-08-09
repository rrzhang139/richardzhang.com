import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ExternalLink from "../../components/Posts/ExternalLink";
import SyntaxHighlighter from "react-syntax-highlighter";
import Quote from "../../components/Posts/Quote";
import PostMeta from "../../components/Posts/PostMeta";

const components = {
  ExternalLink,
  SyntaxHighlighter,
  PostMeta,
  Quote,
};

const proseClasses = () => {
  // py-12 prose-lg text-justify prose-p:leading-loose prose-h2:mt-24 prose-h2:border-b prose-h2:border-white prose-h1:text-5xl lg:prose-h1:leading-normal prose-a:text-blue-400 prose-headings:text-left md:py-20
  return [
    "prose prose-p:text-justify md:prose-lg lg:prose-xl my-20",
    "prose-h2:mt-24 prose-h2:border-b prose-h2:border-gray-400",
    "prose-ul:list-disc	prose-ol:list-decimal",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ].join(" ");
};

const PostPage = ({ mdxSource }) => {
  return (
    <section className="space-y-10">
      <section className="max-w-xl px-12 mx-auto lg:px-0">
        <article
          className={proseClasses()}
          style={{
            fontFamily: "Nanum Myeongjo, serif",
          }}
        >
          <MDXRemote {...mdxSource} components={components} />
        </article>
        {/* </div> */}
      </section>
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
