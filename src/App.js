import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const githubUrl = "https://api.github.com/users/";

  const [username, setUsername] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const fetch = await axios.get(githubUrl + username);
    console.log(fetch);
  };
  return (
    <div>
      <input onChange={handleUsername} type="text" />
      <button onClick={handleSubmit} type="submit">
        Search
      </button>
    </div>
  );
};

export default App;
