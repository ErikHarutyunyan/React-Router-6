import { Link, useMatch } from "react-router-dom";

import React from "react";

const CustomLink = ({ children, to, ...props }) => {
  const match = useMatch(to);
  // useMatch-ով կրանք իմանաք հղումը ակտիվե թե չէ
  // console.log({match}); // կարանք տենք մեջը ինչ կա

  // const match = useMatch({
  //   path: to,
  //   end: to.length === 1,
  // });
  return (
    <>
      <Link
        to={to} // վերցնում ենք ստացած to-ն
        {...props} // վերցնում ենք props-երը
        style={{ color: match ? "var(--color-active)" : "white" }}>
        {children}
        {/* վերցնում ենք children-ը */}
      </Link>
    </>
  );
};

export { CustomLink };
