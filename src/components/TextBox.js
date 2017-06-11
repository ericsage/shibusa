import React from 'react'
import './TextBox.css'

export default function TextBox({
  type,
  children,
  ...props
}) {
  return (
    <div
      className={
        "Shibusa-TextBox" +
        " " + (type || "")
      }
      {...props}
    >
      {children}
    </div>
  )
}
