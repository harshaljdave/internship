import React from 'react'

import Cp_2 from './Cp_2'
import Cp_3 from './Cp_3'

function Cp_1() {
  return (
    <div>
        This the parent component that passes the props
        <Cp_2 />
        <Cp_3 data="Hello World"/>
    </div>
  )
}

export default Cp_1