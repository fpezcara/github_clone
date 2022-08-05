import React, { useContext } from "react";
import { RepoContext } from "../../context";
import "./card.css";
import RepoCardInfo from "../RepoCardInfo";

import Card from "react-bootstrap/Card";
const RepoCard = () => {
  const [repos] = useContext(RepoContext);

  return (
    <>
      {repos.map((repo) => (
        <Card
          key={repo.id}
          className="m-0 p-3 my-4 shadow-sm p-3 mb-5 rounded bg-white text-dark"
        >
          <Card.Title className="mb-0 p-3 d-flex flex-column">
            <a href={repo.html_url}>{repo.name}</a>
            <span className="mt-2 pt-4">{repo.description}</span>
            <span>{repo.language}</span>
          </Card.Title>
          <RepoCardInfo repo={repo} />
        </Card>
      ))}
    </>
  );
};

export default RepoCard;
