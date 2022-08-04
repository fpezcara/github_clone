import React, { useState, useContext } from "react";
import { RepoContext } from "../../context";
import "./card.css";
import RepoCardInfo from "../RepoCardInfo";

const RepoCard = () => {
  const [repos] = useContext(RepoContext);
  const [seeInfo, setSeeInfo] = useState(false);
  const [selectedRepo, setSelectedRepo] = useState([]);
  console.log(repos);

  const handleSeeMore = (e, repo) => {
    e.preventDefault();
    setSeeInfo(true);
    setSelectedRepo(repo);
  };
  console.log("aaaaa", seeInfo);
  return (
    <div id="repoCard">
      {repos.map((repo, index) => (
        <div key={repo.id}>
          <a href={repo.html_url}>{repo.name}</a>
          <span className="repoDescription">{repo.description}</span>
          {seeInfo && repo.id === selectedRepo.id ? (
            <RepoCardInfo selectedRepo={selectedRepo} />
          ) : (
            <button onClick={(e) => handleSeeMore(e, repo)}>See more</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default RepoCard;
