/* eslint-disable react-hooks/rules-of-hooks */
import { useSelector } from "react-redux";
import { selectAllPosts, getPostsStatus, getPostsError } from "./postsSlice";
import PostsExcerpt from "./PostsExcerpt";

const postsList = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const error = useSelector(getPostsError);

  let content;
  if (postsStatus === "loading") {
    content = <p>loading...</p>;
  } else if (postsStatus === "succeeded") {
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
    content = orderedPosts.map((post) => (
      <PostsExcerpt key={post.id} post={post} />
    ));
  } else if (postsStatus === "failed") {
    // eslint-disable-next-line no-unused-vars
    content = <p>{error}</p>;
  }

  return <section>{content}</section>;
};

export default postsList;
