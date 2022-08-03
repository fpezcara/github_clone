import React, { useContext } from "react";
import { RepoContext } from "../../context";
import "./card.css";

const RepoCard = () => {
  const [repos] = useContext(RepoContext);
  console.log(repos);
  return (
    <div id="repoCard">
      {repos.map((i, index) => {
        return (
          <div key={index}>
            <a href={i.html_url}>{i.name}</a>
          </div>
        );
      })}
    </div>
  );
};

export default RepoCard;
