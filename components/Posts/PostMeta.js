import React from "react";

const PostMeta = ({ createdAt, lastUpdated = undefined }) => {
  return (
    <div class="leading-3 text-base">
      <p className="">Published: {createdAt}</p>
      {lastUpdated && <p className="">Last updated: {lastUpdated}</p>}
    </div>
  );
};

export default PostMeta;
