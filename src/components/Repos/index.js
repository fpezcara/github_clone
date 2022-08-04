import React, { useContext } from "react";
import { RepoContext } from "../../context";
import RepoCard from "../RepoCard";
import "./styles.css";

import Row from "react-bootstrap/Row";

const Repos = () => {
  const [repos, setRepos] = useContext(RepoContext);
  console.log(repos);
  return (
    <>
      {repos.length !== 0 && (
        <article id="reposContainer">
          <Row className="pl-3 ml-3 mb-4">
            <h2>Repositories</h2>
          </Row>
          <Row className="pl-3 ml-3">
            <RepoCard />
          </Row>
        </article>
      )}
    </>
  );
};

export default Repos;
