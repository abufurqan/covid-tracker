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

      <h1>API - Fetch / Get</h1>
      <h3>You are seeing all of my repositories, you can check it a github by clicking my name <a href="https://github.com/abufurqan?tab=repositories">Fiaz Ahmed</a></h3>
      <h4>or click any of the below repository to open it in a new tab</h4>
    
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