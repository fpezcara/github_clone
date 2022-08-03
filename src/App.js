import React from "react";
import { RepoProvider } from "./context";
import { SearchInput, Repos } from "./components";

const App = () => {
  return (
    <>
      <RepoProvider>
        <SearchInput />
        <Repos />
      </RepoProvider>
    </>
  );
};

export default App;
