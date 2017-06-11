import React from 'react'
import './Button.css'

export default function Button({
  type,
  inverted,
  children,
  ...props
}) {
  return (
    <button
      className={
        "Shibusa-Button" +
        " " + (type || "") +
        " " + (inverted && "inverted")
      }
      {...props}
    >
      {children}
    </button>
  )
}
