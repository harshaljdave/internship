import React from 'react';
import { useTasks, useTasksDispatch } from './TaskContext.js';


export default function TaskList({ setEditID, setEditing, setTin }) {
    const tasks = useTasks();
    const dispatch = useTasksDispatch();

    const edittask = (id, task) => {
        setEditing(true)
        setEditID(id);
        setTin(task);
    }

    return (
        <div>
            {console.log(tasks)}
            <ul>
                {tasks.map((t) => (
                    <li className="taskItem"
                        key={t.id} id={t.id}>
                        {t.task}{"  "}
                        <button onClick={() => dispatch({ type: "delete_task", payload: { did: t.id } })} className='delTask' >Delete</button>

                        <button onClick={() => edittask(t.id, t.task)} className='editTask' >Edit</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}