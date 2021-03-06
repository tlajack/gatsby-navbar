import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const navlinks = [
  { name: "Home", slug: "/" },
  {
    name: "About",
    slug: "/about",
    sublink: [
      { name: "About 2", slug: "/item2" },
      { name: "About 3", slug: "/item3" },
    ],
  },
  {
    name: "Contact",
    slug: "/item1",
    sublink: [
      { name: "Car", slug: "/item2" },
      { name: "Potatoe", slug: "/item3" },
      { name: "Hexcarnivore", slug: "/item3" },
    ],
  },
];

const TheNav = styled.div`
  background-color: var(--yellow);
  height: 50px;
  width: 100%;
  font-size: 1.4rem;
  border-bottom: 3px solid var(--red);
  display: flex;
  flex-direction: row;
  .logo {
    margin: 6px;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
  }
  a {
    text-decoration: none;
  }
  ul {
    margin: 1em;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    list-style: none;
    padding-inline-start: 0;
    li {
      padding: 0 20px;
      position: relative;
      ul {
        background-color: var(--yellow);
        margin: 0;
        padding: 14px 0 0 1em;
        padding-inline-start: 0;
        display: flex;
        flex-direction: column;
        max-height: 0;
        min-width: 140px;
        /* transform: scaleY(0);
        transform-origin: top;
        transition: transform 0.1s ease-in-out; */
        overflow: hidden;
        transition: max-height 200ms ease-in-out;
        position: absolute;
        top: 100%;
        left: 0;
        li {
          margin: 0;
          padding: 10px 20px;
          width: 100%;
        }
        li:hover {
          background-color: var(--red);
          a {
            display: block;
            color: white;
            width: 100%;
          }
        }
      }
    }
    li:hover {
      ul {
        max-height: 500px;
        /* transform: scaleY(1); */
      }
    }
  }
`;

function renderSublinks(x) {
  return (
    <ul>
      {x.map((sublink, j) => (
        <li key={j}>
          <Link to={sublink.slug}>{sublink.name}</Link>
        </li>
      ))}
    </ul>
  );
}

const Header = () => {
  return (
    <TheNav>
      <Link to="/" className="logo">
        <StaticImage src="../images/icon.png" alt="logo" height={40} />
      </Link>
      <ul>
        {navlinks.map((navlink, i) => (
          <li key={i}>
            <Link to={navlinks[i].slug}>{navlinks[i].name}</Link>
            {navlinks[i].sublink ? renderSublinks(navlinks[i].sublink) : null}
          </li>
        ))}
      </ul>
    </TheNav>
  );
};

export default Header;
