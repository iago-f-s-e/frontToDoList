import React, { useEffect, useRef, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import api from '../../services/api';
import Tasks from '../Task';
import './index.css';

const TodoList = () => {
  const { data } = useFetch('tasks');
  const inputRef = useRef(null);

  if (!data) {
    return <p>carregando...</p>
  }

  const addToDo = async () => {
    let idTask = data.length + 1;
    let task = inputRef.current.value;

    await api.post('/tasks', {
      id: idTask,
      name: task,
      status: false
    });
    inputRef.current.value = "";
  }

  return (
    <div className="container">

      <div className="addTask">
        <input id="taskText" type="text" ref={inputRef}></input>
        <button id="taskButton" type="button" onClick={addToDo}><p id="texto">Adicionar</p></button>
      </div>

      {data.map(toDo => <Tasks name={toDo.name} status={toDo.status} id={toDo.id} />)}
    </div>
  );

}

export default TodoList;