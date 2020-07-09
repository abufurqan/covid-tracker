import React, { useEffect, useState } from 'react';
import './App.css';

function Covid() {

  const [repos, setRepos] = useState([{}]);

  useEffect( () => {

    async function getRepos() {
      const response = await fetch("https://api.github.com/users/abufurqan/repos")
      const data = await response.json();

      console.log(data);
      setRepos(data);
    }
    getRepos();

  },[])

  return (
    <div className="App">

      <h1>Covid Tracker</h1>
    
      <ol>
        {repos.map((repoObj, ind) => {
          return (
            
            <li key={ind}>
              <a href={repoObj.svn_url}>{repoObj.name}</a><br />
              Language: {repoObj.language}
            </li>
          )
        })}
      </ol>
    </div>
  );
}

export default Covid;