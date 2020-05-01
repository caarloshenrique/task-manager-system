import React, { useState } from "react";
import { toast } from "react-toastify";
import api from "../../../services/api";
import { login } from "../../../services/auth";

import Button from "../../../styles/components/Button";
import { Container, SignUpForm, Content } from "./styles";

export default function SignUp({ history }) {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await api.post(`/users`, user);

      const userCreate = { email: user.email, password: user.password };

      const response = await api.post(`/sessions`, userCreate);

      const { token, user: userData } = response.data;

      if (token) {
        login(token, userData);
      }

      history.push("/");
    } catch (err) {
      toast.error("Email ou senha inválido!");
    }
  }

  function handleInputChange(e) {
    const { id, value } = e.target;
    setUser({
      ...user,
      [id]: value
    });
  }

  return (
    <Container>
      <Content>
        <SignUpForm onSubmit={handleSubmit}>
          <h1>Cadastro de usuário</h1>

          <span>NOME</span>
          <input
            id="name"
            value={user.name}
            required
            onChange={handleInputChange}
          />

          <span>E-MAIL</span>
          <input
            id="email"
            type="email"
            value={user.email}
            required
            onChange={handleInputChange}
          />

          <span>SENHA</span>
          <input
            id="password"
            type="password"
            value={user.password}
            required
            onChange={handleInputChange}
          />

          <Button size="big" onClick={handleSubmit} type="submit">
            Cadastrar
          </Button>
        </SignUpForm>
      </Content>
    </Container>
  );
}
