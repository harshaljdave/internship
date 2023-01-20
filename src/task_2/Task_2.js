import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'

import Cp_1 from './Cp_1'

function Task_2() {
  return (
    <>
    <div className='Navdiv'>
      <ul className='Navul'>
        <li><NavLink to="1">CP1</NavLink></li>
        <li><NavLink to="2">CP2</NavLink></li>
        <li><NavLink to="3">CP3</NavLink></li>
      </ul>
    </div>
        <h1>Task_2</h1>
        <Cp_1 />
    </>
  )
}

export default Task_2