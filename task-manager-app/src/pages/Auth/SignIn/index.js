import React, { useState } from "react";
import { toast } from "react-toastify";
import api from "../../../services/api";
import { login } from "../../../services/auth";

import Button from "../../../styles/components/Button";
import { Container, SignForm } from "./styles";

export default function SignIn({ history }) {
  const [user, setUser] = useState({ email: "", password: "" });

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await api.post(`/sessions`, user);

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
      <SignForm onSubmit={handleSubmit}>
        <h1>
          <i className="material-icons md-48">account_circle</i>
        </h1>

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
          Entrar
        </Button>
      </SignForm>
    </Container>
  );
}
