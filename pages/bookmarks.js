import Container from "../components/Container/Container";
import { useState, useEffect } from "react";
import { getRaindrops } from "../lib/raindrops";
import { calculateTimePassed } from "../lib/time";

const Bookmarks = ({ bookmarks: bookmarkData }) => {
  const [bookmarks, setBookmarks] = useState([]);
  useEffect(() => {
    setBookmarks(bookmarkData);
  }, [bookmarkData]);

  return (
    <Container title="Bookmarks">
      <ul className="text-white font-text">
        {bookmarks.map((bookmark, index) => (
          <li
            key={index}
            className="font-text text-sm text-stone-400 hover:text-white transition-colors ease-in duration-300 hover:cursor-pointer py-3 border-b border-b-neutral-700 hover:border-b-neutral-500"
          >
            <a
              href={`${bookmark.completeUrl}`}
              target="_blank"
              rel="noreferrer"
            >
              <h3 className="w-fit">{bookmark.title}</h3>
            </a>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export const getStaticProps = async () => {
  let bookmarks;
  try {
    bookmarks = await getRaindrops();
    bookmarks = bookmarks.map((bookmark) => {
      return {
        title: bookmark.title,
        created: bookmark.created,
        shortUrl: bookmark.link.split("/")[2].replace("www.", ""),
        completeUrl: bookmark.link,
        tags: bookmark.tags,
      };
    });
  } catch (e) {
    bookmarks = [];
  }

  return {
    props: { bookmarks },
    revalidate: 900,
  };
};

export default Bookmarks;
