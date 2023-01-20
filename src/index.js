import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route, NavLink,Link } from 'react-router-dom';

import './index.css';
import App from './App';
import T1q2 from './task_1/T1q2';
import Task_2 from './task_2/Task_2';
import DRoute from './task_2/DRoute';
import Task_3 from './task_3/Task_3';
import Task_4 from './task_4/Task_4';
import Task_5 from './task_5/Task_5';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <div className='Navdiv'>
      <ul className='Navul'>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <Link to="/task_1/T1q2">T1Q2</Link>
        </li>
        <li>
          <NavLink to="/task2">Task 2</NavLink>
        </li>
        <li>
          <NavLink to="/task3">Task 3</NavLink>
        </li>
        <li>
          <NavLink to="/task4">Task 4</NavLink>
        </li>
        <li>
          <NavLink to="/task5">Task 5</NavLink>
        </li>
      </ul>
    </div>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/task_1/T1q2" element={<T1q2 />} />
      <Route path='/task2' element={<Task_2 />} />
      <Route path='/task2/:cmp' element={<DRoute />} />
      <Route path='/task3' element={<Task_3 />} />
      <Route path='/task4' element={<Task_4 />} />
      <Route path='/task5' element={<Task_5 />} />
      <Route path='*' element={<h1>Error 404</h1>} />
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
