import { Routes, Route, Link } from "react-router-dom";
// Այն ժամանակ կար Switch component հիմա դրա փոխարեն Routes-նա

import { Homepage } from "./pages/Homepage";
import { About } from "./pages/Aboutpage";
import { Blogpage } from "./pages/Blogpage";
import { Contact } from "./pages/Contact";
import { Notfoundpage } from "./pages/Notfoundpage";

import { Layout } from "./components/Layout";

// Routing միջոցով ապահովում ենք կայքը SPA(Single Page Application ) լինելուն
function App() {
  return (
    <>
      <Routes>
        {/*  path-հասցե, element-ինչը ցույց տա*/}
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          {/* index տալով հասկացնում ենք որ ինքը  path="/" */}
          <Route path="about" element={<About />} />
          <Route path="posts" element={<Blogpage />} />
          <Route path="contact" element={<Contact />} />
          {/* "*"-դնելով հասկացնում ենք մնացած դեպքերում  */}
          <Route path="*" element={<Notfoundpage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
