import { NavLink, Outlet } from "react-router-dom";
// Outlet - նրա համարա որ մեր разметкин ասենք թե որտեղ դնեք բոլոր մնացածը
import { CustomLink } from "./CustomLink";

// isActive - ստուգում ենք ակտիվա թե չէ, հա ավելացնում ենք active-link չէ ""
const setActive = ({ isActive }) => (isActive ? "active-link" : "");

const Layout = () => {
  return (
    <>
      <header>
        {/*  NavLink ավելացնումա tag-ի class="active" */}
        <NavLink to="/">Home</NavLink>
        {/* className ընդունումա setActive - ֆունկցյաի վերադրձրածը */}
        <NavLink to="/posts" className={setActive}>
          Blog
        </NavLink>
        {/* Ստուգում ենք եթե active-ա միանգամից տալիս եմ style -  */}
        <NavLink
          to="/about"
          style={({ isActive }) => ({
            color: isActive ? "var(--color-active)" : "white"
          })}>
          About
        </NavLink>
        {/* Link դնում ենք a-ի տեղը, href-ի տեղը դնում ենք to */}
        {/* <Link to="/contact">Contact</Link> */}

        <CustomLink to="/contact">Contact</CustomLink>
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
