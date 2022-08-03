import React, { useContext } from "react";
import { RepoContext } from "../../context";
import RepoCard from "../RepoCard";
import "./styles.css";

const Repos = () => {
  const [repos, setRepos] = useContext(RepoContext);

  //1. open_issues_count
  console.log(repos);
  return (
    <>
      {repos.length !== 0 && (
        <article id="reposContainer">
          <h2>Repositories</h2>
          <RepoCard />
        </article>
      )}
    </>
  );
};

export default Repos;
