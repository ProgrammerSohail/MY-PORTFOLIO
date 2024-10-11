import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import VerticalNav from "./components/layouts/nav";
import Home from "./website/index";
import AboutMe from "./components/AboutMe";
import Messages from "./components/contact";
import Logo from "./components/nav-logo";
import CustomCursor from "./components/CustomCursor";
import LoadingAnimation from "./components/layouts/LodingAnimation";
import "./index.css";
import Services from "./website/services";

const GlobalStyle = createGlobalStyle`
  body,div,lable,a,Link,button {
    cursor: none;
  }
  .clickable {
    cursor: none;
  }
`;

const PageWrapper = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    setIsVisible(true);
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => setIsLoading(false), 500); // Wait for fade-out transition
    }, 1500);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {isLoading && (
        <div
          className={`fixed inset-0 z-50 flex justify-center items-center bg-gray-700 transition-opacity duration-500 ease-in-out ${
            isVisible ? "opacity-100" : "opacity-50"
          }`}
        >
          <LoadingAnimation size="100" color="#4facfe" />
        </div>
      )}
      <div
        className={`transition-opacity duration-500 ease-in-out ${
          isLoading ? "bg-black" : "bg-transparent"
        }`}
      >
        {children}
      </div>
    </>
  );
};

function App() {
  return (
    <Router>
      <GlobalStyle />
      <div className="App">
        <CustomCursor />
        <Logo />
        <VerticalNav />
        <Routes>
          <Route
            path="/"
            element={
              <PageWrapper>
                <Home />
              </PageWrapper>
            }
          />
          <Route
            path="/about"
            element={
              <PageWrapper>
                <AboutMe />
              </PageWrapper>
            }
          />
          <Route
            path="/ContactUs"
            element={
              <PageWrapper>
                <Messages />
              </PageWrapper>
            }
          />
          <Route
            path="/services"
            element={
              <PageWrapper>
                <Services />
              </PageWrapper>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
