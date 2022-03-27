import { useState, useRef } from "react";

const PostItem = ({
  input,
  id,
  created_date,
  love,
  funny,
  surprise,
  sleepy,
  sad,
  cry,
  angry,
  onEdit,
}) => {
  const increaseEmotion = () => {
    const newItem = {
      input,
      id,
      created_date,
      love: 0,
      funny: 0,
      surprise: 0,
      sleepy: 0,
      sad: 0,
      cry: 0,
      angry: 1,
    };
    onEdit(id, newItem);
  };
  return (
    <div className="PostItem">
      <div className="info">
        <span>{id + 1}번째 감정</span>
        <span className="date">{new Date(created_date).toLocaleString()}</span>
      </div>
      <p className="line"></p>
      <div className="itemContent">{input}</div>
      <div className="emotion">
        <button onClick={increaseEmotion}>🥰 {love}</button>
        <button>😂 {funny}</button>
        <button>😲 {surprise}</button>
        <button>🥱 {sleepy}</button>
        <button>😢 {sad}</button>
        <button>😭 {cry}</button>
        <button>🤬 {angry}</button>
      </div>
    </div>
  );
};

export default PostItem;
