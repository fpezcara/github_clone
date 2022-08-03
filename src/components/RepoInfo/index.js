import React, { useContext } from "react";
import { RepoContext } from "../../context";

const RepoInfo = () => {
  const [repos, setRepos] = useContext(RepoContext);
  console.log("WE ARE IN REPOINFO COMPONENT,", repos);
  return <div>RepoInfo</div>;
};

export default RepoInfo;
