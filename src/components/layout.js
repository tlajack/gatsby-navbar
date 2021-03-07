import React from "react";
import PropTypes from "prop-types";
// import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import Header from "../components/header";
import Footer from "../components/footer";

import styled from "styled-components";
import "normalize.css";
import GlobalStyles from "./globalStyles";

const Container = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
  background-color: #ffffee;
  height: 100vh;
`;

const Layout = ({ children }) => {
  return (
    <Container>
      <GlobalStyles />
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:ital@1&family=Montserrat:wght@700&family=Open+Sans:wght@300&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
