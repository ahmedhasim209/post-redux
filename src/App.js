import PostsList from "./features/posts/PostsList.js";
import AddPostForm from "./features/posts/AddPostForm.js";
import SinglePostPage from "./features/posts/SinglePostPage.js";
import EditPostForm from "./features/posts/EditPostForm.js";
import UserPage from "./features/users/UserPage.js";
import UsersList from "./features/users/UsersList.js";
import Layout from "./components/Layout.js";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PostsList />} />

        <Route path="post">
          <Route index element={<AddPostForm />} />
          <Route path=":postId" element={<SinglePostPage />} />
          <Route path="edit/:postId" element={<EditPostForm />} />
        </Route>
        <Route path="user">
          <Route index element={<UsersList />}></Route>
          <Route path=":userId" element={<UserPage />}></Route>
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
