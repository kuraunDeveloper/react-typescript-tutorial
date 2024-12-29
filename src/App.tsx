import { useState } from 'react';
import axios from 'axios';
import { Todo } from './Todo';
import './App.css'

type TodoType = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
          lat: string;
          lng: string;
      };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);
  const onClickFetchData = async () => {
    try {
      const response = await axios.get<Array<TodoType>>('https://jsonplaceholder.typicode.com/users');
      const data = response.data;
      console.log(data);
      setTodos(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="App">
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map(todo => <Todo id={todo.id} key={todo.id} name={todo.name} email={todo.email}/>
      )}
    </div>
  )
}

export default App
