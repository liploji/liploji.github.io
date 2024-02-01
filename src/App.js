import React from "react";
import Menu from "./Components/Menu";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import "./App.css";

const App = () => {
  return (
    <>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="A website portfolio of the author. The template is from bootstrap templates." />
        <meta name="author" content="Zeldrix Archieval R. Don" />
        <title>Portfolio of Zeldrix Don</title>
        {/* <!--<link rel="icon" type="image/x-icon" href="assets/img/favicon.ico" /> --> */}
        {/* <!-- Font Awesome icons (free version)--> */}
        <script src="https://use.fontawesome.com/releases/v5.15.3/js/all.js" crossorigin="anonymous"></script>
        {/* <!-- Google fonts--> */}
        <link href="https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i" rel="stylesheet" type="text/css" />
        {/* <!-- Core theme CSS (includes Bootstrap)--> */}
        <link href="css/styles.css" rel="stylesheet" />
      </head>
      <body id="page-top">
        <Menu />
        <Body />
        <Footer />
      </body>
    </>
  );
};

export default App;
