import React from 'react'
import './Checkbox.css'

export default function Checkbox(props) {
  console.log(props)
  return (
    <input
      type="checkbox"
      className="Shibusa-Checkbox"
      {...props}
    />
  )
}
