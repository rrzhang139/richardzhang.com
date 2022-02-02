import { MDXProvider } from "@mdx-js/react";
import BlogPostHeader from "../../components/Blog/BlogPostHeader";

const BlogLayout = ({ meta, children }) => {
  return (
    <MDXProvider>
      <article className='mt-20 px-12 max-w-5xl mx-auto prose prose-zinc prose-h1:text-3xl prose-h1:text-stone-600'>
        <BlogPostHeader meta={meta} />
        {children}
      </article>
    </MDXProvider>
  );
};

export default BlogLayout;
