import PostItem from "./PostItem.js";

const PostList = ({ postList, onEdit }) => {
  return (
    <div className="PostList">
      <div>
        {postList.map((it) => (
          <PostItem key={it.id} {...it} onEdit={onEdit} />
        ))}
      </div>
    </div>
  );
};

PostList.defaultProps = {
  postList: [],
};

export default PostList;
