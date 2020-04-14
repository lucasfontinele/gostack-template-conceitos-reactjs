import styled from "styled-components";

export const Container = styled.div`
  margin: 0;
  padding: 0;

  height: 100%;
  width: 100%;
  background: #7b1e7a;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  h1 {
    position: absolute;
    top: 0;
    margin-top: 50px;

    color: #fff;
  }
`;

export const CardInputContainer = styled.div`
  display: flex;
  align-items: center;

  height: 50px;
  width: 750px;

  background: #fff;
  border-radius: 20px;
  padding: 0 20px;

  margin-bottom: 20px;

  input {
    height: 35px;
    width: 250px;
    border: 1px solid #c9c9c9;
    outline: none;

    margin-right: 20px;
    padding: 0 10px;
  }
`;

export const CardRepositories = styled.ul`
  display: flex;
  flex-direction: column;

  height: 100%;
  max-height: 350px;
  width: 750px;
  padding: 20px;

  background: #fff;
  box-shadow: 2px -1px 38px -2px rgba(0, 0, 0, 0.4);
  border-radius: 20px;

  overflow-y: auto;
`;
