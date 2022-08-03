import React, { useState, useContext } from "react";
import { RepoContext } from "../../context";
import axios from "axios";

const SearchInput = () => {
  const githubUrl = "https://api.github.com/users/";

  const [username, setUsername] = useState("");
  const [repos, setRepos] = useContext(RepoContext);

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.get(githubUrl + username + "/repos");
    await setRepos(data);
  };

  return (
    <>
      <input onChange={handleUsername} type="text" />
      <button onClick={handleSubmit} type="submit">
        Search
      </button>
    </>
  );
};

export default SearchInput;
