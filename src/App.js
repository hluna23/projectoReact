import React, { useState } from "react"
import App1 from "./App1";
import "./App.css";
export default function App() {


  const [repositories, setRepositories] = useState([
    {id: 1, name: 'repo-1'},
    {id: 2, name: 'repo-2'},
    {id: 3, name: 'repo-3'},
  ]);

  function handleAddRepository() {
    setRepositories([
      ...repositories,
      {id: Math.random(), name: 'Novo repo'}
    ])
  }
  return (
    <div>
      <App1 />
        <ul>
          {repositories.map((repo) =>( 
          <li key={repo.id}>{repo.name}</li>
          ))}
        </ul> 
        <button className="Btn1" onClick={handleAddRepository}>Adicionar Repositorio</button >
    </div>
  )
}