import styled from "styled-components";

export const Container = styled.div`
  margin-left: 200px;
  height: 100%;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  flex: 1;
  height: 100%;
  background: #f7f7f9;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TaskForm = styled.form`
  background: rgba(255, 255, 255, 0.4);
  border-radius: 3px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
  padding: 40px;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  h1 {
    color: #0c3d5f;
    font-size: 26px;
    font-weight: 500;
    text-align: center;
    margin: 0, 0, 10px;
  }
  span {
    color: #0c3d5f;
    font-size: 14px;
    line-height: 16px;
    font-weight: 600;
    margin-top: 15px;
  }
  input {
    height: 40px;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    background-color: 1px solid rgba(0, 0, 0, 0.1);
    color: #000000;
    margin-top: 8px;
    transition: border 0.15s ease;
    font-size: 16px;
    &:focus {
      border-color: #7289da;
    }
  }
  button {
    margin: 20px 0 0;
  }
`;
