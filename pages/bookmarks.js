import LandingContainer from "../components/Containers/LandingContainer";
import * as dayjs from "dayjs";
import { useState, useEffect } from "react";
import axios from "axios";
import { getRaindrops } from "../lib/raindrops";

const Bookmarks = ({ bookmarks: bookmarkData }) => {
  const [bookmarks, setBookmarks] = useState([]);
  useEffect(() => {
    setBookmarks(bookmarkData);
  }, [bookmarkData]);

  return (
    <LandingContainer classnames="mt-12">
      <div>
        <h1 className="text-2xl">Bookmarks</h1>
        <p className="mt-4 italic">
          Useful resources for software development or anything I find
          insighftul. Inspired by{" "}
          <a
            href="https://ademilter.com/bookmarks"
            rel="noopener noreferrer"
            target="_blank"
            className="text-blue-400"
          >
            Adem Ilter's website
          </a>
          .
        </p>
      </div>
      <ul className="space-y-7">
        {bookmarks.map((bookmark, index) => (
          <li key={index}>
            <div className="flex space-x-2">
              <h3 className="font-bold">
                <a
                  href={`${bookmark.completeUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {bookmark.title}
                </a>
              </h3>
              {/* <ul className="flex text-xs self-center space-x-1">
                {bookmark.tags.map((tag, index) => (
                  <li className="tag" key={index}>
                    {tag}
                  </li>
                ))}
              </ul> */}
            </div>

            <div className="flex space-x-2 text-sm text-gray-500">
              <a
                href={`${bookmark.completeUrl}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {bookmark.shortUrl}
              </a>
              <span>&#8226;</span>
              <span>2 days ago</span>
            </div>
          </li>
        ))}
      </ul>
    </LandingContainer>
  );
};

export const getStaticProps = async ({ req, res }) => {
  let bookmarks;
  try {
    bookmarks = await getRaindrops();
    bookmarks = bookmarks.map((bookmark) => {
      return {
        title: bookmark.title,
        created: bookmark.created,
        shortUrl: bookmark.link.split("/")[2],
        completeUrl: bookmark.link,
        tags: bookmark.tags,
      };
    });
  } catch (e) {
    bookmarks = [];
  }

  return {
    props: { bookmarks },
    revalidate: ms("1h") / 1000,
  };
};

export default Bookmarks;
