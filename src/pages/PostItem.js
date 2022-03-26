import { useState, useRef } from "react";

const PostItem = ({ input, id, created_date }) => {
  return (
    <div className="PostItem">
      <div className="info">
        <span>익명1</span>
        <span className="date">{new Date(created_date).toLocaleString()}</span>
      </div>
      <p className="line"></p>
      <div className="content">{input}</div>
    </div>
  );
};

export default PostItem;
