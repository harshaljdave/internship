import React, { useState } from 'react';
import './Task_3.css'


const Task_3 = () => {
    const [tid, setId] = useState(0);
    const [tasks, setTask] = useState([]);

    const TaskSubmit = e => {
        e.preventDefault();
        setId(tid + 1)
        const intask = e.target[0].value;
        if (intask === "" || intask[0] === " ") {
            return false;
        }
        setTask(tasks => [...tasks, { tid, intask }]);
        e.target[0].value = "";
    }

    const deltask = (e) => {
        setTask(tasks.filter(task => task.tid !== parseInt(e.target.name)))
    }

    return (
        <div className='container'>
            <h1>TO DO LIST</h1>
            <form onSubmit={TaskSubmit}>
                <h3 style={{ display:"inline" }}>Task: </h3>
                <input type="text" name="intask" /><br />
                <input type="submit" className='addTask' />
            </form>
            <div>
                <ul>
                    {tasks.map((t) => (
                        <li className="taskItem" key={t.tid}>
                            {t.intask}{"  "}
                            <input type="button" onClick={deltask} className='delTask' name={t.tid} value="Delete" />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Task_3;