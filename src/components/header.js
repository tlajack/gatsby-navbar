import React from "react";
import { Link } from "gatsby";

const navlinks = [
  { name: "home", slug: "/" },
  { name: "about", slug: "/about" },
  {
    name: "item1",
    slug: "/item1",
    sublink: [
      { name: "item2", slug: "/item2" },
      { name: "item3", slug: "/item3" },
    ],
  },
];

const Header = () => {
  return (
    <>
      <ul>
        {navlinks.map((navlink, i) => (
          <li>
            <Link to={navlinks[i].slug}>{navlinks[i].name}</Link>
            {navlinks[i].sublink ? <p>sublink</p> : null}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Header;
