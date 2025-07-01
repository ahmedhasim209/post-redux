import { Outlet } from "react-router-dom";
import Header from "./Header";

function layout() {
  return (
    <>
      <Header />
      <main className="App">
        <Outlet />
      </main>
    </>
  );
}

export default layout;
