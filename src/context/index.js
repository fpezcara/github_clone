import React, { createContext, useState } from "react";

export const RepoContext = createContext();

export const RepoProvider = ({ children }) => {
  const [repos, setRepos] = useState([]);

  return (
    <RepoContext.Provider value={[repos, setRepos]}>
      {children}
    </RepoContext.Provider>
  );
};
