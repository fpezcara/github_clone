import React from "react";
import { RepoProvider } from "./context";
import { NavBar, Home, Footer } from "./components";
import "./App.css"


const App = () => {
  return (
    <>
      <RepoProvider>
        <NavBar />
        <Home />
        <Footer />
      </RepoProvider>
    </>
  );
};

export default App;
