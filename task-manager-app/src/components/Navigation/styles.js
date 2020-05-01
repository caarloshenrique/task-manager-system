import styled from "styled-components";

export const Container = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  background: #0c3d5f;
  padding: 20px 0;
  width: 200px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerButton = styled.aside`
  background: #0c3d5f;
  width: 200px;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Item = styled.button`
  border: 0;
  background: transparent;
  margin: 0 0 8px;

  i {
    font-size: 55px;
    color: #fff;
  }

  &:hover i {
    border-radius: 30%;
  }
`;

export const Logout = styled.button`
  width: 100%;
  height: 50px;
  border: 1px dashed #e04848;
  background: transparent;
  color: #e04848;
  font-weight: bold;
  transition: all 0.2s;

  &:hover {
    border-color: #a43d3d;
  }
`;

export const Back = styled.button`
  width: 100%;
  height: 50px;
  border: 1px dashed #cecece;
  background: transparent;
  color: #fff;
  font-weight: bold;
  transition: all 0.2s;

  &:hover {
    border-color: #ffff;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 50px;
  border: none;
  background: transparent;
  color: #fff;
  font-weight: bold;
  transition: all 0.2s;

  &:hover {
    background: #7dae3f;
  }
`;
