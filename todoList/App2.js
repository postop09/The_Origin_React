// class 형 리액트
import React, {Component} from 'react';
import './App.css';

export default class App extends Component {

state = {
  todoData : [],
  value: '',
}

  // 페이지 내부에서 바로 스타일을 주는 방법
  btnStyle = {
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right',
  }

  getStyle = (completed) => {
    return {
      padding: '10px',
      borderBottom: '1px dotted #ccc',
      textDecoration: completed ? 'line-through' : 'none',
    }
  }
  
  handleClick = (id) => {
    let newTodoData = this.state.todoData.filter(data => data.id !== id)
    this.setState({todoData: newTodoData})
  }

  handleChange = (e) => {
    this.setState({value: e.target.value})
  }

  handleSubmit = (e) => {
    // 페이지 새로고침을 방지해준다.
    e.preventDefault();

    // 새로운 할 일 데이터
    let newTodo = {
      id: Date.now(),
      title: this.state.value,
      completed: false
    }

    // 원래 있던 할 일에 새로운 할 일 더해주기
    this.setState({todoData: [...this.state.todoData, newTodo], value: ''});
  }

  handleCompleteChange = (id) => {
    let newTodoData = this.state.todoData.map((data) => {
      if(data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    })

    this.setState({todoData: newTodoData});
  }
  
  // key값은 고유한 값을 사용(id값) : key 값을 통해, 바뀐 부분을 인식할 수 있다.
  render() { // 랜더함수가 반드시 필요함
    return (
      <div className='container'>
        <div className='todoBlock'>
          <div className='title'>
            <h1>할 일 목록</h1>
          </div>
          {this.state.todoData.map((data) => (
            <div style={this.getStyle(data.completed)} key={data.id}> 
              <input type='checkbox' defaultChecked={false} onChange={() => this.handleCompleteChange(data.id)}></input>
              {data.title}
              <button style={this.btnStyle} onClick={() => this.handleClick(data.id)}>X</button>
            </div>
          ))}
          <form style={{display: 'flex'}} onSubmit={this.handleSubmit}>
            <input
            type='text'
            name='value'
            style={{flex: '10', padding: '5px'}}
            placeholder='해야 할 일을 입력하세요.'
            value={this.state.value}
            onChange={this.handleChange}></input>
            <input
            type='submit'
            value='입력'
            className='btn_submit'
            style={{flex: '1'}}></input>
          </form>
        </div>
      </div>
    )
  }
}