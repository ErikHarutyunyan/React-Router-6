import { Routes, Route, Link } from "react-router-dom";
// Այն ժամանակ կար Switch component հիմա դրա փոխարեն Routes-նա

import { Homepage } from "./pages/Homepage";
import { About } from "./pages/Aboutpage";
import { Blogpage } from "./pages/Blogpage";
import { Contact } from "./pages/Contact";
import { Notfoundpage } from "./pages/Notfoundpage";

// Routing միջոցով ապահովում ենք կայքը SPA(Single Page Application ) լինելուն

function App() {
  return (
    <>
      <header>
        {/* Link դնում ենք a-ի տեղը, href-ի տեղը դնում ենք to */}
        <Link to="/">Home</Link>
        <Link to="/posts">Blog</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </header>
      <Routes>
        {/*  path-հասցե, element-ինչը ցույց տա*/}
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Blogpage />} />
        <Route path="/contact" element={<Contact />} />
        {/* "*"-դնելով հասկացնում ենք մնացած դեպքերում  */}
        <Route path="*" element={<Notfoundpage />} />
      </Routes>
    </>
  );
}

export default App;
