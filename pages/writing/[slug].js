import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ExternalLink from "../../components/Posts/ExternalLink";
import SyntaxHighlighter from "react-syntax-highlighter";
import Nav from "../../components/Nav";
import Quote from "../../components/Posts/Quote";
// import { Button } from "../../components";

const components = {
  ExternalLink,
  SyntaxHighlighter,
  Quote,
};

const PostPage = ({ frontMatter: { title, date, description }, mdxSource }) => {
  return (
    <section className="space-y-10">
      {/* header section */}
      <section className="max-w-2xl px-12 lg:px-0 mx-auto">
        {/* <div className="max-w-5xl mx-auto lg:max-w-3xl xl:mx-0"> */}
        {/* blog content section */}
        <article
          className="prose-p:leading-loose prose-lg prose-h2:mt-24 prose-h2:border-b prose-h2:border-white prose-h1:text-3xl lg:prose-h1:text-4xl lg:prose-h1:leading-normal prose-a:text-blue-400 prose-headings:text-left py-12 md:py-20  max-w-5xl text-justify"
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
