import React, { useState, useEffect } from "react";

import { Container, TaskItem, ContainerTasks } from "./styles";
import api from "../../services/api";

export default function Task({ history }) {
  const [task, setTask] = useState([]);
  useEffect(() => {
    const getTask = async () => {
      const response = await api.get("/tasks");
      setTask(response.data.docs);
    };
    getTask();
  }, []);

  return (
    <div>
      <Container>
        <header>
          <h1>Itens de Backlog:</h1>
        </header>
        <ContainerTasks>
          {task.map(function(object) {
            return (
              <TaskItem key={object._id}>
                <p>Nome: {object.name}</p>
                <p>Descrição: {object.description}</p>
                <p>Estimativa: {object.estimate}h</p>
                <p>Autor: {object.author.name}</p>
              </TaskItem>
            );
          })}
        </ContainerTasks>
      </Container>
    </div>
  );
}
