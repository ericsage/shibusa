import React from 'react'
import './Button.css'

export default function Button({
  children,
  type,
}) {
  return (
    <button
      className={"Shibusa-Button" + " " + (type || "")}
    >
      {children}
    </button>
  )
}
