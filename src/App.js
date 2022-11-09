import React, { Fragment } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import CarListing from "./pages/CarListing";
import CarDetails from "./pages/CarDetails";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Router>
        <Fragment>
          <Header />
          <div>
            <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/cars" element={<CarListing />} />
              <Route path="/cars/:slug" element={<CarDetails />} />
              <Route path="/blogs" element={<Blog />} />
              <Route path="/blogs/:slug" element={<BlogDetails />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
