import React, { useState, useContext } from "react";
import { RepoContext } from "../../context";
import "./card.css";
import RepoCardInfo from "../RepoCardInfo";

const RepoCard = () => {
  const [repos] = useContext(RepoContext);
  const [seeInfo, setSeeInfo] = useState(false);
  console.log(repos);

  const handleSeeMore = (e) => {
    e.preventDefault();
    setSeeInfo(true);
  };
  return (
    <div id="repoCard">
      {repos.map((repo, index) => {
        return (
          <div key={index}>
            <a href={repo.html_url}>{repo.name}</a>
            <button onClick={handleSeeMore}>See more</button>
            {seeInfo && <RepoCardInfo repo={repo} />}
          </div>
        );
      })}
    </div>
  );
};

export default RepoCard;
