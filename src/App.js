import React, { useContext } from "react";
import {  RepoProvider } from "./context";
import { SearchInput, RepoInfo } from "./components";

const App = () => {

  return (
    <>
      <RepoProvider>
        <SearchInput />
        <RepoInfo />
      </RepoProvider>
    </>
  );
};

export default App;
