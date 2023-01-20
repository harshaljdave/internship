import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'

import Cp_1 from './Cp_1'

function Task_2() {
  return (
    <>
        <div>
            <NavLink to="1">CP1</NavLink><br/>
            <NavLink to="2">CP2</NavLink><br/>
            <NavLink to="3">CP3</NavLink><br/>
        </div>
        <h1>Task_2</h1>
        <Cp_1 />
    </>
  )
}

export default Task_2