import PostItem from "./PostItem.js";

const PostList = ({ postList }) => {
  return (
    <div className="PostList">
      <div>
        {postList.map((it) => (
          <PostItem key={it.id} {...it} />
        ))}
      </div>
    </div>
  );
};

PostList.defaultProps = {
  postList: [],
};

export default PostList;
