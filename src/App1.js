import React, {useState, useEffect} from "react";
import "./App1.css"

export default function App1() {
  const [repositories, setRepositories] = useState([]);
  
  useEffect(async () => {

    const response = await fetch('https://api.github.com/users/hluna23/repos');

    const data = await response.json();

    setRepositories(data)
  }, []);

    useEffect (() => {

      const filtered = repositories.filter(repo => repo.favorite);

     document.title = `voce tem ${ filtered.length} favoritos`

    }, [repositories]);

  function handleFavoritas(id) {
    const newRepositories = repositories.map(repo => {

      return repo.id == id ? {...repo, favorite: !repo.favorite} : repo
  });

    setRepositories(newRepositories);

}

    return (
  
  <ul className="Lista"> 
    {repositories.map(repo => (
      <li key={repo.id}>{repo.name}
      {repo.favorite && <span>(Favorito) </span>}
      <button className="Btn" onClick={ () => handleFavoritas(repo.id)}>favoritas</button>
      </li>
    ))}  
    </ul>
  
  );

}