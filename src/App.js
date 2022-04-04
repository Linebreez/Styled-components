import React, { Component } from "react";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
body{
  height: 100vh;
  display:flex;
  justify-content: center;
  align-items:center;
  background-color: #0000ff;
}
`;

const Container = styled.div`
  width: 60vw;
  height: 50vh;
  background-color: #ff1493;
  text-align: center;
  color: #000;
`;

class App extends Component {
  state = {
    task: "",
    taskList: []
  };

  handleChange = (event) => {
    this.setState({
      task: event.target.value
    });
  };

  add = () => {
    let { task } = this.state;
    if (task.length > 0) {
      this.setState({
        task: "",
        taskList: this.state.taskList.concat({
          task: task,
          id: Date.now()
        })
      });
    }
  };

  remove = (id) => {
    //desconstrução
    let { taskList } = this.state;
    this.setState({
      taskList: taskList.filter((item) => {
        return item.id !== id;
      })
    });
  };

  render() {
    return (
      <Container>
        <GlobalStyle />
        <h1>Todo List</h1>
        <input onChange={this.handleChange} value={this.state.task} />
        <button onClick={this.add}>add</button>
        <ul>
          {this.state.taskList.map((item) => (
            <li>
              {item.task}
              <button onClick={() => this.remove(item.id)}>X</button>
            </li>
          ))}
        </ul>
      </Container>
    );
  }
}

export default App;
