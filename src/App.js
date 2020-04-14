import React, { useState, useEffect } from "react";

import { Container, CardInputContainer, CardRepositories } from "./styles";
import api from "./services/api";

import "./styles.css";

function App() {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [techs, setTechs] = useState("");
  const [repositories, setRepositories] = useState([]);

  async function handleAddRepository() {
    const _techs = techs.replace(" ", "").split(",");

    const data = {
      title,
      url,
      techs: _techs
    };

    try {
      const response = await api.post("/repositories", data);

      if (response.status === 201) {
        const _repositories = [...repositories];

        _repositories.push(response.data);

        setRepositories(_repositories);
      }
    } catch ({ response }) {
      console.log(response);
    }
  }

  async function handleRemoveRepository(id) {
    const response = await api.delete(`/repositories/${id}`);

    if (response.status === 204) {
      const _repositories = [...repositories];
      const index = _repositories.findIndex((prop) => prop.id === id);

      _repositories.splice(index, 1);

      setRepositories(_repositories);
    }
  }

  async function getRepositories() {
    const response = await api.get("/repositories");

    if (response.status === 200) {
      setRepositories(response.data);
    }
  }

  useEffect(() => {
    getRepositories();
  }, []);

  return (
    <Container>
      <h1>Repositórios</h1>
      <CardInputContainer>
        <input
          placeholder="Digite o título"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="Digite a URL"
          name="url"
          onChange={(e) => setUrl(e.target.value)}
        />
        <input
          placeholder="Digite as techs separadas por vírgula"
          name="techs"
          onChange={(e) => setTechs(e.target.value)}
        />
        <button type="button" onClick={handleAddRepository}>
          Adicionar
        </button>
      </CardInputContainer>
      <CardRepositories data-testid="repository-list">
        {repositories.length <= 0 && <p>Você ainda não tem repositórios</p>}
        {repositories.map((item) => (
          <li key={item.id}>
            {item.title}
            <button onClick={() => handleRemoveRepository(item.id)}>
              Remover
            </button>
          </li>
        ))}
      </CardRepositories>
    </Container>
  );
}

export default App;
