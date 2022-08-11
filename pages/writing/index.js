import Nav from "../../components/Nav";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import LandingContainer from "../../components/Containers/LandingContainer";

const Home = ({ posts }) => {
  return (
    <LandingContainer classnames="mt-12 space-y-16">
      <div>
        <h1 className="text-2xl">Writing</h1>
        <p className="mt-4 italic">
          I write blog posts about the software industry and systems design.
        </p>
      </div>
      <ul className="space-y-10">
        {posts.map((post, index) => (
          <li key={index} className="block pl-2 border-l border-gray-300">
            <div className="max-w-xl space-y-3">
              <div>
                <h3 className="text-lg">{post.frontMatter.title}</h3>
              </div>
              <p className="max-w-xl text-sm">{post.frontMatter.description}</p>
              <div>
                <Link href={`writing/${post.frontMatter.slug}`} passHref>
                  <span className="text-xs border-b hover:cursor-pointer">
                    Read more...
                  </span>
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </LandingContainer>
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
