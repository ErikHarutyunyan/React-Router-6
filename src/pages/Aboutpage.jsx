import React from "react";
import { Outlet, Link } from "react-router-dom";

function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>Thid is demo website about React-router-dom libary</p>
      <ul>
        <li>
          <Link to="contacts">Our Contacts</Link>
        </li>
        <li>
          <Link to="team">Our Team</Link>
        </li>
      </ul>
      <Outlet /> {/* ստե քցելույա element էլեմենտը */}
      {/* <Routes>
        <Route path="contacts" element={<p>Our Contacts</p>} />
        <Route path="team" element={<p>Our Team</p>} />
      </Routes> */}
    </div>
  );
}

export { About };
