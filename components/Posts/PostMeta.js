import React from "react";

const PostMeta = ({ createdAt, lastUpdated = undefined }) => {
  return (
    <div className="text-base leading-3">
      <p className="">Published: {createdAt}</p>
      {lastUpdated && <p className="">Last updated: {lastUpdated}</p>}
    </div>
  );
};

export default PostMeta;
