import PostItem from "./PostItem.js";

const PostList = ({ postList, onEdit, classifyFlag }) => {
  return (
    <div className="PostList">
      <div>
        {postList.map((it) =>
          classifyFlag === "unclassify" ? (
            <PostItem key={it.id} {...it} onEdit={onEdit} />
          ) : it[classifyFlag] !== 0 ? (
            <PostItem key={it.id} {...it} onEdit={onEdit} />
          ) : (
            <></>
          )
        )}
      </div>
    </div>
  );
};

PostList.defaultProps = {
  postList: [],
};

export default PostList;
