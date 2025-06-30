/* eslint-disable react-hooks/rules-of-hooks */
import { useSelector, useDispatch } from "react-redux";
import {
  selectAllPosts,
  getPostsStatus,
  getPostsError,
  fetchposts,
} from "./postsSlice";
import { useEffect } from "react";
import PostsExcerpt from "./PostsExcerpt";

const postsList = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const error = useSelector(getPostsError);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (postsStatus === "idle") {
      dispatch(fetchposts());
    }
  });

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

  return (
    <section>
      <h2>Posts</h2>
      {content}
    </section>
  );
};

export default postsList;
