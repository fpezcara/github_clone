import React, { useState, useContext } from "react";
import { RepoContext } from "../../context";
import axios from "axios";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const SearchInput = () => {
  const githubUrl = "https://api.github.com/users/";
  const [username, setUsername] = useState("");
  const [repos, setRepos] = useContext(RepoContext);

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(githubUrl + username + "/repos");
      await setRepos(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Form className="d-flex justify-content-between align-items-center">
        <Form.Group>
          <Form.Label>Enter your Github username</Form.Label>
          <Form.Control onChange={handleUsername} type="text" />
        </Form.Group>
        <Button
          variant="light"
          onClick={handleSubmit}
          type="submit"
          size="md"
          className="justify-self-baseline"
        >
          Search
        </Button>
      </Form>
    </>
  );
};

export default SearchInput;
