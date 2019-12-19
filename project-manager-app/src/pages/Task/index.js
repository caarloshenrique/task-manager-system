import React, { useState, useEffect } from "react";

import { Container, TaskItem, ContainerTasks, Teste, Title } from "./styles";
import api from "../../services/api";

export default function Task() {
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
          <h1>Itens de Backlog</h1>
        </header>
        <ContainerTasks>
          {task.map(function(object) {
            return (
              <TaskItem key={object._id}>
                <Teste>
                  <i className="material-icons md-48">list_alt</i>
                  <b>
                    <Title>{object.name}</Title>
                  </b>
                </Teste>
                <br></br>
                <p>Descrição: {object.description}</p>
                <p>Estimativa: {object.estimate}h</p>
                <br></br>
                <hr></hr>
                <center>
                  <p>Autor: {object.author.name}</p>
                </center>
              </TaskItem>
            );
          })}
        </ContainerTasks>
      </Container>
    </div>
  );
}
