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
        <Card id="repoCard" key={repo.id} className="">
          <Card.Body>
            <a href={repo.html_url}>{repo.name}</a>
            <span className="repoDescription">{repo.description}</span>
          </Card.Body>
          <RepoCardInfo repo={repo} />
        </Card>
      ))}
      {/* </div> */}
    </>
  );
};

export default RepoCard;
