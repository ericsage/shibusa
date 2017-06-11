import React from 'react'
import './Button.css'

export default function Button({
  children,
  type,
  ...props
}) {
  return (
    <button
      className={"Shibusa-Button" + " " + (type || "")}
      {...props}
    >
      {children}
    </button>
  )
}
