import React,{useState,useEffect} from 'react'

const Todo = () => {
    const [tid, setId] = useState(0);
    const [tasks, setTask] = useState([]);
    const [editID,setEditID] = useState();
    const [editing,setEditing] = useState(false);
    const [tin,setTin] = useState('');

 
    const TaskSubmit = e => {
        e.preventDefault();
        const task = tin;

        // EDITING TASK
        if (editing) {

            // console.log(tin)
            let id = parseInt(editID);
            // setTask(prev => prev.map(item => (item.tid === todoId ? newValue : item)));
            setTask(tasks => tasks.map(atask => (atask.id === id ? {id,task}:atask)));
            setTin('');
            setEditing(false);
            setEditID();
            return;
        }

        //ADDING A TASK
        setId(tid + 1)
        let id= tid;
        if (task === "" || task[0] === " ") {
            return false;
        }
        setTask(tasks => [...tasks, { id, task }]);
        setTin('');
    }

    //DELETE TASK
    const deltask = (e) => {
        setTask(tasks.filter(task => task.id !== parseInt(e.target.name)))
    }

    //EDIT TASK BUTTON
    const edittask = (e) => {
        setEditing(true)
        const task_item = document.getElementById(e.target.name);
        setTin(task_item.innerText);
        setEditID(task_item.id);
    }

    return (
        <div className='container'>
            {console.log(tasks)}
            <h1>TO DO LIST</h1>
            <form onSubmit={TaskSubmit}>
                <h3 style={{ display:"inline" }}>Task: </h3>
                <input value={tin} onChange={e => setTin(e.target.value)} type="text" name="intask" /><br />
                <input type="submit" className='addTask' />
            </form>
            <div>
                <ul>
                    {tasks.map((t) => (
                        <li className="taskItem" key={t.id} id={t.id}>
                            {t.task}{"  "}
                            <input type="button" onClick={deltask} className='delTask' name={t.id} value="Delete" />
                            <input type="button" onClick={edittask} className='editTask' name={t.id} value="Edit" />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Todo;