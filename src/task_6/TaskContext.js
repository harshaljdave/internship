import { createContext, useContext, useReducer } from 'react';


const TasksContext = createContext(null);

const TasksDispatchContext = createContext(null);

export function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(reducer, [])

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

export function useTasks() {
  return useContext(TasksContext);
}

export function useTasksDispatch() {
  return useContext(TasksDispatchContext);
}


const reducer = (tasks, action) => {
  switch (action.type) {
    case "add_task":
      console.log(action)
      return [...tasks, { id: action.payload.id, task: action.payload.task, complete: false }]

    case "delete_task":
      return tasks.filter(task => task.id !== action.payload.did)

    case "edit_task":
      let id = action.payload.eid
      let task = action.payload.task
      tasks = tasks.map(atask => (atask.id === id ? { id, task } : atask));
      return tasks

    default:
      console.log("Error")
      break;
  }
}  