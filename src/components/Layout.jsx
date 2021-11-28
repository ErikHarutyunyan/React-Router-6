import { Link, Outlet } from "react-router-dom";
// Outlet - նրա համարա որ մեր разметкин ասենք թե որտեղ դնեք բոլոր մնացածը

const Layout = () => {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/posts">Blog</Link>
        <Link to="/about">About</Link>
      </header>

      <main className="container">
        <Outlet />
        {/* Outlet այն տեղնա, որտեղ դնելու ենք content-ը, element-ից գալացող  */}
      </main>

      <footer>
        <div className="container">&copy; ReactRouter Tutorials 2021</div>
      </footer>
    </>
  );
};

export { Layout };
