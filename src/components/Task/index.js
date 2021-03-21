import React, { useState } from 'react';
import api from '../../services/api';
import './index.css';

const Tasks = (props) => {
  const { name, status, id } = props;
  const [statusTask, setStatusTask] = useState(status);
  const [idTask, setIdTask] = useState(id);
  
  const handleStatus = async () => {
    setStatusTask(!statusTask);

    await api.put(`/tasks/${id}`, {
      id: id,
      name: name,
      status: !statusTask  
    });
  }

  return (
    <div className="task">
      <div className={statusTask ? "done" : "undone"} id="taskName">
        <p>{name}</p>
      </div>
      <div id="taskCheck">
        <buttom type="button" onClick={handleStatus}><p>{statusTask ? "Desfazer" : "Feito" }</p></buttom>
      </div>
    </div>
  )
}


export default Tasks;