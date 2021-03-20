import React, { useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import api from '../../services/api';
import Inputs from '../Inputs';

const TodoList = () => {
  const [idLastTask, setIdLastTask] = useState(0);
  const { data, error } = useFetch('users');

  if (!data) {
    return <p>carregando...</p>
  }

  const addToDo = async () => {
    let idTask = data.length + 1;

    await api.post('/users', {
      id: idTask,
      name: "nome da tarefa",
      status: false
    });
  }

  return (
    <div>
      {data.map(toDo => <Inputs />)}
      <button name="adicionar" type="button" onClick={addToDo}>
        teste
      </button>
    </div>
  );

}

export default TodoList;