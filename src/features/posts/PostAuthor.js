import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";

function PostAuthor({ userId }) {
  const users = useSelector(selectAllUsers);
  // eslint-disable-next-line no-undef
  const author = users.find((user) => user.id === userId);

  return <span>{author ? author.name : "Unkown Author"}</span>;
}

export default PostAuthor;
