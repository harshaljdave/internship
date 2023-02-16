import React, { useState, useReducer } from 'react'
import { useTasksDispatch } from './TaskContext.js';

function Task_6({editing,setEditing,edit_id,tin,setTin}) {

    const [tid, setId] = useState(0);
    const dispatch = useTasksDispatch();

    const TaskSubmit = e => {
        e.preventDefault();
        if (tin !== "" && tin !== " ")
            editing ? dispatch({ type: "edit_task", payload: { eid: edit_id, task: tin } }) : dispatch({ type: "add_task", payload: { id: tid, task: tin, } });
        setId(tid + 1);
        setEditing(false);
        setTin("");
    }

    return (
        <div className='container'>
            <h1>TO DO LIST</h1>
            <form onSubmit={TaskSubmit}>
                <h3 style={{ display: "inline" }}>Task: </h3>
                <input value={tin} onChange={e => setTin(e.target.value)} type="text" name="intask" /><br />
                <input type="submit" className='addTask' />
            </form>
        </div>
    )
}

export default Task_6;