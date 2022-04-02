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
  const increaseEmotion = (emotion) => {
    onEdit(id, emotion);
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
        <button
          onClick={() => {
            increaseEmotion("love");
          }}
        >
          🥰 {love}
        </button>
        <button
          onClick={() => {
            increaseEmotion("funny");
          }}
        >
          😂 {funny}
        </button>
        <button
          onClick={() => {
            increaseEmotion("surprise");
          }}
        >
          😲 {surprise}
        </button>
        <button
          onClick={() => {
            increaseEmotion("sleepy");
          }}
        >
          🥱 {sleepy}
        </button>
        <button
          onClick={() => {
            increaseEmotion("sad");
          }}
        >
          😢 {sad}
        </button>
        <button
          onClick={() => {
            increaseEmotion("cry");
          }}
        >
          😭 {cry}
        </button>
        <button
          onClick={() => {
            increaseEmotion("angry");
          }}
        >
          🤬 {angry}
        </button>
      </div>
    </div>
  );
};

export default PostItem;
