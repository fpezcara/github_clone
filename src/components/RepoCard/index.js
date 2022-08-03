import React, { useContext } from "react";
import { RepoContext } from "../../context";
import "./card.css";

const RepoCard = () => {
    const [repos, setRepos] = useContext(RepoContext);

    return <>
        <div>
            {repos.map((i, index) => {
                return (
                    <p key={index}><a href={i.html_url}>{i.name}</a></p>
                )
            })}
        </div>
    </>;
};

export default RepoCard;
