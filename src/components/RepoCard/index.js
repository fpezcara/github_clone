import React, { useState, useContext } from "react";
import { RepoContext } from "../../context";
import "./card.css";
import RepoCardInfo from "../RepoCardInfo";

import Card from "react-bootstrap/Card";
const RepoCard = () => {
  const [repos] = useContext(RepoContext);

  return (
    // <div id="repoCard">
    <>
      {repos.map((repo) => (
        <Card key={repo.id} className="m-0 p-3 my-4">
          <Card.Title className="mb-0 p-3 d-flex flex-column">
            <a href={repo.html_url}>{repo.name}</a>
            <span className="mt-2 pt-4">{repo.description}</span>
            <span>{repo.language}</span>
          </Card.Title>
          <RepoCardInfo repo={repo} />
        </Card>
      ))}
      {/* </div> */}
    </>
  );
};

export default RepoCard;
