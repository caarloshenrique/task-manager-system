import React, { useState } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";

import Button from "../../styles/components/Button";
import { Container, TaskForm, Content } from "./styles";

export default function NewTask({ history }) {
  const [task, setTask] = useState({ name: "", description: "", estimate: "" });

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await api.post(`/task`, task);
      history.push("/");
    } catch (err) {
      toast.error("Erro ao cadastrar anúncio!");
    }
  }

  function handleInputChange(e) {
    const { id, value } = e.target;
    setTask({
      ...task,
      [id]: value
    });
  }

  return (
    <Container>
      <Content>
        <TaskForm onSubmit={handleSubmit}>
          <h1>Cadastro de tarefa</h1>

          <span>NOME:</span>
          <input
            id="name"
            value={task.name}
            required
            onChange={handleInputChange}
          />

          <span>DESCRIÇÃO:</span>
          <input
            id="description"
            value={task.description}
            required
            onChange={handleInputChange}
          />

          <span>ESTIMATIVA DE HORAS:</span>
          <input
            id="estimate"
            type="number"
            value={task.estimate}
            required
            onChange={handleInputChange}
          />

          <Button size="big" onClick={handleSubmit} type="submit">
            Cadastrar
          </Button>
        </TaskForm>
      </Content>
    </Container>
  );
}
