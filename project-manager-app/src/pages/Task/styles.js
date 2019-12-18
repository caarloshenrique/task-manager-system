import styled from "styled-components";

export const Container = styled.div`
  margin-left: 200px;
  flex: 1;
  padding: 20px;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0 20px;

    h1 {
      color: #0c3d5f;
      font-size: 20px;
    }

    div {
      button {
        margin-left: 10px;
      }
    }
  }
`;

export const TaskItem = styled.div`
  color: #0c3d5f;
  background: #fff;
  border-radius: 5px;
  margin: 0 0 20px;
  padding: 20px;
  width: 30%;

  p {
    font-size: 18px;
  }
`;

export const ContainerTasks = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
`;
