import React from "react";
import { RepoProvider } from "./context";
import { NavBar, SearchInput, Repos } from "./components";

const App = () => {
  return (
    <>
      <RepoProvider>
        <NavBar />
        <SearchInput />
        <Repos />
      </RepoProvider>
    </>
  );
};

export default App;
