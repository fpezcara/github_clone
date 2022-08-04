import React, { useState, useContext } from "react";
import { RepoContext } from "../../context";
import "./card.css";
import RepoCardInfo from "../RepoCardInfo";

const RepoCard = () => {
  const [repos] = useContext(RepoContext);

  return (
    <div id="repoCard">
      {repos.map((repo, index) => (
        <div key={repo.id}>
          <a href={repo.html_url}>{repo.name}</a>
          <span className="repoDescription">{repo.description}</span>
          <RepoCardInfo repo={repo} />
        </div>
      ))}
    </div>
  );
};

export default RepoCard;
