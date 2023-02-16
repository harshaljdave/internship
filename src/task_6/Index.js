import React,{useState} from 'react'
import Task_6 from './Task_6.js'
import TaskList from './Task_list.js';
import { TasksProvider } from './TaskContext.js';

import './task_6.css';

const Index = () => {

    const [editing, setEditing] = useState(false);
    const [edit_id, setEditID] = useState(-1);
    const [tin, setTin] = useState('');

    return (
        <TasksProvider>
            <Task_6 editing={editing} setEditing={setEditing} edit_id={edit_id} tin={tin} setTin={setTin} />
            <TaskList setEditID={setEditID} setEditing={setEditing} tin={tin} setTin={setTin} />
        </TasksProvider>
    )
}

export default Index;