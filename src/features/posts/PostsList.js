/* eslint-disable react-hooks/rules-of-hooks */
import { useSelector } from "react-redux";
import { selectPostIds, getPostsStatus, getPostsError } from "./postsSlice";
import PostsExcerpt from "./PostsExcerpt";

const postsList = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const orderedPostIds = useSelector(selectPostIds);
  const postsStatus = useSelector(getPostsStatus);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const error = useSelector(getPostsError);

  let content;
  if (postsStatus === "loading") {
    content = <p>loading...</p>;
  } else if (postsStatus === "succeeded") {
    content = orderedPostIds.map((postId) => (
      <PostsExcerpt key={postId} postId={postId} />
    ));
  } else if (postsStatus === "failed") {
    // eslint-disable-next-line no-unused-vars
    content = <p>{error}</p>;
  }

  return <section>{content}</section>;
};

export default postsList;
