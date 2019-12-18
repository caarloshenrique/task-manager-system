import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";

import { Container, List, Item, ContainerButton, Button } from "./styles";
import { logout } from "../../services/auth";

export default function Navigation() {
  const [logged, setLogged] = useState(true);

  async function back() {
    window.history.back();
  }

  function handleLogout() {
    logout();
    setLogged(!logged);
  }

  return (
    <Container>
      {!logged && <Redirect to="/" />}
      <List>
        <Item>
          <i className="material-icons">account_circle</i>
        </Item>
      </List>
      <ContainerButton>
        <Link to="/task" style={{ textDecoration: "none", width: "100%" }}>
          <Button>Nova tarefa</Button>
        </Link>

        <Link to="/signup" style={{ textDecoration: "none", width: "100%" }}>
          <Button>Novo usuário</Button>
        </Link>

        <Link to="/" style={{ textDecoration: "none", width: "100%" }}>
          <Button>Lista de tarefas</Button>
        </Link>

        <Button onClick={back}>Voltar</Button>
        <Button onClick={handleLogout}>Sair</Button>
      </ContainerButton>
    </Container>
  );
}
