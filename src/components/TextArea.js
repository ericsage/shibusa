import React from 'react'
import './TextArea.css'

export default function TextArea(props) {
  return (
    <textarea
      type="text"
      className="Shibusa-TextArea"
      {...props}
    />
  )
}
