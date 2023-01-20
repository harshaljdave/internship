import React from 'react'
import { useParams } from 'react-router-dom'

const DRoute = () => {
    const {cmp} = useParams()
  return (
    <h2>
        Dynamic route number {cmp}
    </h2>
  )
}

export default DRoute