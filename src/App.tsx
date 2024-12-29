import { useState } from 'react';
import axios from 'axios';
import { Todo } from './Todo';
import './App.css'
import { TodoType } from './types/todo';
import { Text } from './Text';
import { UserProfile } from './UserProfile';
import { User } from './types/user';

const user: User = {
  name: 'みや',
  hobbies: ['映画','ゲーム']
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
      <Text color="red" fontSize="18px">ほげほげ</Text>
      <UserProfile user={user} />
    </div>
  )
}

export default App
